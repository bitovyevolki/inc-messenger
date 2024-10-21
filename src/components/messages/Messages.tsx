import { Button } from '@bitovyevolki/ui-kit-int'

import s from './Messages.module.scss'

type MessagesProps = {
  activChat: boolean
}

export const Messages = ({ activChat }: MessagesProps) => {
  return (
    <div>
      {activChat ? (
        <div className={s.wrapper}>active chat with messages</div>
      ) : (
        <div className={s.wrapper}>
          <Button variant={'secondary'}>Choose who you would like to talk to</Button>
        </div>
      )}
    </div>
  )
}
