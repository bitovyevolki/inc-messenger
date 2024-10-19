import { Button } from '@bitovyevolki/ui-kit-int'

import s from './Messages.module.scss'

export const Messages = () => {
  return (
    <div className={s.wrapper}>
      <Button variant={'secondary'}>Choose who you would like to talk to</Button>
    </div>
  )
}
