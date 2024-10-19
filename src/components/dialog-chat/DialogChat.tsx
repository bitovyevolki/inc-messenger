import { Typography } from '@bitovyevolki/ui-kit-int'

import s from './dialogChat.module.scss'

export const DialogChat = () => {
  return (
    <div className={s.wrap}>
      <div className={s.icon}>ikon</div>
      <div className={s.content}>
        <div className={s.title}>
          <Typography variant={'body2'}>{'Ekaterina Ivanova'}</Typography>
        </div>
        <div className={s.message}>
          <Typography variant={'overline'}>{'Message'}</Typography>
        </div>
      </div>
      <div className={s.date}>
        <Typography variant={'overline'}>{'31.aug'}</Typography>
      </div>
    </div>
  )
}
