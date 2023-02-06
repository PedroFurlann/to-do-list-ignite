import { PlusCircle } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar
        <PlusCircle />
      </button>
    </SearchFormContainer>
  )
}
