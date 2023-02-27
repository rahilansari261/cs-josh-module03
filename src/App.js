import './App.css'
import GlobalStyles from './GlobalStyles'
// import { Quote } from './Quote'
// import { FrequentlyAskedQuestion } from './Faq'
// import { LoginForm } from './Login'
// import { ContactCard } from './Card'
// import cat from './assets/cat.jpg'
// import hall from './assets/hall.jpg'
// import { WallArt } from './WallArt'
import { ButtonGroup } from './IconButton'

function App() {
  return (
    // <Quote
    //   by='Bill Gates (Allegedly)'
    //   source='https://quoteinvestigator.com/2011/09/08/640k-enough/'
    // >
    //   640kb of memory ought to be enough for anyone
    // </Quote>

    // <FrequentlyAskedQuestion
    //   question='What does “CSS” stand for?'
    //   answer='Cool Styling Strategy'
    // />

    // <LoginForm
    //   handleSubmit={(ev) => {
    //     ev.preventDefault()
    //     alert('Submitted!')
    //   }}
    // />
    // <ContactCard avatarSrc={cat} name='Mittens' email='meow@gmail.com' />
    // <WallArt
    //   src={hall}
    //   alt='A hallway with rainbow-coloured lights'
    //   caption='Photo by Efe Kurnaz'
    //   width={250}
    // />
    <>
      <ButtonGroup />
      <GlobalStyles />
    </>
  )
}

export default App
