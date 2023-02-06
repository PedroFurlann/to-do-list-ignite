import { HeaderContainer } from './styles'
import Rocket from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Rocket} alt="Rocket todo" />
    </HeaderContainer>
  )
}
