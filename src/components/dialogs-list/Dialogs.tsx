import s from './dialogs.module.scss'

import { DialogItem } from '../dialog-chat/DialogItem'

type DialogProps = {
  activChat: boolean
}

export const Dialogs = ({ activChat }: DialogProps) => {
  return (
    <div className={s.wrapper}>
      <DialogItem activChat={activChat} />
      <DialogItem activChat={activChat} />
      <DialogItem activChat={activChat} />
    </div>
  )
}
