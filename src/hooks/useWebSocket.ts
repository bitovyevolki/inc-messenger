import { useEffect, useRef, useState } from 'react'

import { Socket, io } from 'socket.io-client'

// Типы для сообщения и уведомления
interface MessageType {
  createdAt: string
  id: number
  messageText: string
  ownerId: number
  receiverId: number
  status: string
  updatedAt: string
}

interface NotificationType {
  clientId: string
  id: number
  isRead: boolean
  message: string
  notifyAt: string
}

const enum SocketEventPath {
  ERROR = 'error',
  MESSAGE_DELETED = 'message-deleted',
  MESSAGE_SENT = 'message-sent',
  NOTIFICATIONS = 'notifications',
  RECEIVE_MESSAGE = 'receive-message',
  UPDATE_MESSAGE = 'update-message',
}

const useSocket = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([])
  const [messages, setMessages] = useState<MessageType[]>([])
  const [error, setError] = useState<null | string>(null)
  const socketRef = useRef<Socket | null>(null)

  const connectSocket = () => {
    // const accessToken = localStorage.getItem('token')

    // if (!accessToken) {
    //   setError('No access token found')

    //   return
    // }

    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMzgsImlhdCI6MTcyOTM1MzA1NywiZXhwIjoxNzI5MzU2NjU3fQ.4sYMsq9logdJPU_CueNkzNHxPjWTUe4t9AUqaLV5UfU'

    const queryParams = {
      query: { accessToken },
      transports: ['websocket', 'polling'],
      withCredentials: true,
    }

    const socket = io('https://inctagram.work', queryParams)

    socketRef.current = socket

    // Обработчики событий WebSocket
    socket?.on('connect', () => {
      console.log('WebSocket подключен')
    })

    socket?.on('disconnect', e => {
      console.log('WebSocket отключен', e)
    })

    socket?.on('connect_error', error => {
      console.error('Ошибка подключения:', error)
      setError('Ошибка подключения: ' + error.message)
    })

    // Обработчик событий для получения сообщений
    socket?.on(SocketEventPath.RECEIVE_MESSAGE, (message: MessageType) => {
      console.log('Новое сообщение:', message)
      setMessages(prev => [...prev, message])
    })

    // Обработчик событий для получения уведомлений
    socket?.on(SocketEventPath.NOTIFICATIONS, (notification: NotificationType) => {
      console.log('Новое уведомление:', notification)
      setNotifications(prev => [...prev, notification])
    })

    // Обработчик для ошибок
    socket?.on(SocketEventPath.ERROR, (errorData: { message: string }) => {
      console.error('Ошибка:', errorData.message)
      setError(errorData.message)
    })
  }

  useEffect(() => {
    connectSocket()

    // Очистка соединения при размонтировании компонента
    return () => {
      socketRef.current?.disconnect()
    }
  }, [])

  return { error, messages, notifications }
}

export default useSocket

// const sendMessage = (message: string, receiverId: number) => {
//   if (socketRef.current) {
//     const messageData = {
//       message,
//       receiverId,
//     }

//     socketRef.current.emit('RECEIVE_MESSAGE', messageData)
//   }
// }
