import './styles/globals.scss'

import { Messenger } from './components/messenger/Messenger'

function App(...props: any) {
  const locale = props[0]?.locale || 'en'

  return (
    <div>
      <Messenger locale={locale} />
    </div>
  )
}

export default App
