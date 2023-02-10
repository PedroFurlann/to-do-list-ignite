/* eslint-disable no-unused-vars */
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
// import { SearchForm } from '../components/SearchForm'
import {
  EmptyTaskContainer,
  HeaderTaskContainer,
  HomeContainer,
  SearchFormContainer,
  TaskListContainer,
  TaskCreatedAndDone,
  TaskContainer,
} from './styles'

import Clipboard from '../../assets/Clipboard.svg'

export function Home() {
  const [tasksCreated, setTasksCreated] = useState<string[]>([])
  const [taskCreatedCount, setTaskCreatedCount] = useState<number | null>(null)
  const [taskDone, setTaskDone] = useState(0)
  const [newTaskContent, setNewTaskContent] = useState('')

  function taskCounter() {
    setTaskCreatedCount((state) => {
      return state! + 1
    })
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)

    event.target.setCustomValidity('')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasksCreated([...tasksCreated, newTaskContent])
    setNewTaskContent('')
    taskCounter()
  }

  const isEmpty = newTaskContent.length === 0

  return (
    <HomeContainer>
      <SearchFormContainer onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          required
        />

        <button type="submit" disabled={isEmpty}>
          Criar
          <PlusCircle size={16} />
        </button>
      </SearchFormContainer>
      <HeaderTaskContainer>
        <div>
          <TaskCreatedAndDone variant="created">
            Tarefas Criadas
          </TaskCreatedAndDone>
          <span>{taskCreatedCount}</span>
        </div>
        <div>
          <TaskCreatedAndDone variant="done">Concluídas</TaskCreatedAndDone>
          <span>{taskDone}</span>
        </div>
      </HeaderTaskContainer>

      {taskCreatedCount === 0 ||
        (taskCreatedCount === null ? (
          <div>
            <hr />
            <EmptyTaskContainer>
              <img src={Clipboard} alt="" />
              <div>
                <p id="bold">Você ainda não tem tarefas cadastradas</p>
                <p id="no-bold">Crie tarefas e organize seus itens a fazer</p>
              </div>
            </EmptyTaskContainer>
          </div>
        ) : (
          <TaskListContainer>
            {tasksCreated.map((task) => {
              return (
                <TaskContainer key={task}>
                  <p>{task}</p>
                </TaskContainer>
              )
            })}
          </TaskListContainer>
        ))}
    </HomeContainer>
  )
}
