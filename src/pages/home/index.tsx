import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
// import { SearchForm } from '../components/SearchForm'
import {
  EmptyTableContainer,
  HeaderTableContainer,
  HomeContainer,
  SearchFormContainer,
  TableContainer,
  TaskCreatedAndDone,
} from './styles'

import Clipboard from '../../assets/Clipboard.svg'

export function Home() {
  const [taskCreated, setTaskCreated] = useState<number | null>(null)
  const [taskDone, setTaskDone] = useState(0)

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTaskCreated((state) => {
      return state! + 1
    })
  }

  console.log(taskCreated)

  return (
    <HomeContainer>
      <SearchFormContainer onSubmit={handleCreateNewTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </SearchFormContainer>
      <HeaderTableContainer>
        <div>
          <TaskCreatedAndDone variant="created">
            Tarefas Criadas
          </TaskCreatedAndDone>
          <span>{taskCreated}</span>
        </div>
        <div>
          <TaskCreatedAndDone variant="done">Concluídas</TaskCreatedAndDone>
          <span>{taskDone}</span>
        </div>
      </HeaderTableContainer>

      {taskCreated === 0 || taskCreated === null ? (
        <div>
          <hr />
          <EmptyTableContainer>
            <img src={Clipboard} alt="" />
            <div>
              <p id="bold">Você ainda não tem tarefas cadastradas</p>
              <p id="no-bold">Crie tarefas e organize seus itens a fazer</p>
            </div>
          </EmptyTableContainer>
        </div>
      ) : (
        <TableContainer>
          <tbody>
            <td>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  consequatur facere nulla at eveniet, in dolorem similique quas
                  earum perspiciatis eligendi dolore labore voluptatibus
                  provident tenetur! A fuga quisquam dolorum.
                </td>
              </tr>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem dolore ex quasi cum! Magnam dolor aspernatur eaque
                  vitae ea non temporibus quasi quisquam accusamus dolore. Saepe
                  vel sequi quisquam quaerat.
                </td>
              </tr>
            </td>
          </tbody>
        </TableContainer>
      )}
    </HomeContainer>
  )
}
