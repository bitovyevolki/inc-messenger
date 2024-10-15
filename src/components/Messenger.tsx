type Props = {
  locale?: string
}

const Messenger = ({ locale }: Props) => {
  // console.log(locale)

  return (
    <div style={{ border: '2px solid red', padding: '50px', width: 'fit-content' }}>
      Hello world
    </div>
  )
}

export default Messenger
