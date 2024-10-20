import { useState } from 'react'

import { Button, Input, Typography } from '@bitovyevolki/ui-kit-int'

import s from './Messenger.module.scss'

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
