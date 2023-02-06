import { Header } from './components/Header'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Home />
    </>
  )
}

export default App
