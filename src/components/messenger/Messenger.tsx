import { Button, Typography } from '@bitovyevolki/ui-kit-int'

import s from './Messenger.module.scss'

import t from '../../translations'
import { Dialogs } from '../dialogs/Dialogs'
import { Messages } from '../messages/Messages'

type Props = {
  locale: 'en' | 'ru'
}

export const Messenger = ({ locale }: Props) => {
  console.log(t[locale].greeting)

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
