import { useState } from 'react'

import { Button, Input, Typography } from '@bitovyevolki/ui-kit-int'

import s from './Messenger.module.scss'

import useSocket from '../../hooks/useWebSocket'
import { AvatarIcon } from '../../shared/assets/icons/avatar'
import { SearchIcon } from '../../shared/assets/search'
import t from '../../translations'
import { Dialogs } from '../dialogs-list/Dialogs'
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
  const [activChat, setActivChat] = useState(true)

  return (
    <div className={s.wrapper}>
      <Typography variant={'h2'}>{'Messenger'}</Typography>
      <div className={s.container}>
        <div className={s.dialogs}>
          <form className={s.form}>
            <div className={s.searchIcon}>
              <SearchIcon />
            </div>
            <Input className={s.input} placeholder={'Input Search'} />
          </form>
          <div className={s.dialogList}>
            <Dialogs activChat={activChat} />
          </div>
        </div>
        <div className={s.messages}>
          <div>
            {activChat ? (
              <div className={s.title}>
                <div className={s.titleIcon}>
                  <AvatarIcon />
                </div>
                <div className={s.titleName}>Jekaterina Ivanova</div>
              </div>
            ) : (
              <div className={s.title}></div>
            )}
          </div>
          <Messages activChat={activChat} />
        </div>
      </div>
    </div>
  )
}

export default Messenger
