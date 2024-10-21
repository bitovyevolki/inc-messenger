import React, { useEffect, useState } from 'react'

import { Button, Typography } from '@bitovyevolki/ui-kit-int'

import s from './Messenger.module.scss'

import useSocket from '../../hooks/useWebSocket'
import t from '../../translations'
import { Dialogs } from '../dialogs/Dialogs'
import { Messages } from '../messages/Messages'

type Props = {
  locale: 'en' | 'ru'
}

export const Messenger = ({ locale }: Props) => {
  console.log(t[locale].greeting)

  const [searchName, setSearchName] = useState<string>('')
  // const [cursor, setCursor] = useState<string>('') // Для пагинации
  // const [pageSize, setPageSize] = useState<number>(10)
  // const [newMessage, setNewMessage] = useState<string>('')
  // const [receiverId, setReceiverId] = useState<number>(1)

  // Предполагаем, что token хранится в localStorage

  // const { notifications } = useSocket()
  const accessToken = localStorage.getItem('token')

  // useEffect(() => {
  //   console.log(accessToken)
  // }, [accessToken])

  // Запросить сообщения при монтировании компонента
  // useEffect(() => {
  //   getMessages(cursor, pageSize, searchName)
  // }, [cursor, pageSize, searchName])

  // const handleSendMessage = () => {
  //   if (newMessage.trim()) {
  //     sendMessage(newMessage, receiverId)
  //     setNewMessage('') // Очистить поле ввода
  //   }
  // }

  return (
    <div className={s.wrapper}>
      <Typography variant={'h2'}>Messenger</Typography>
      <div className={s.container}>
        <div className={s.dialogs}>
          <h2 className={s.title}>Диалоги</h2>
          <Dialogs />
        </div>
        <div className={s.messages}>
          <h2 className={s.title}>Сообщения</h2>
          <Messages />
        </div>
      </div>
    </div>
  )
}

export default Messenger
