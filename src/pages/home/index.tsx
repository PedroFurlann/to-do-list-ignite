/* eslint-disable no-unused-vars */
import { Check, CheckCircle, PlusCircle, Trash } from 'phosphor-react'
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
  CheckboxRoot,
  CheckboxIndicator,
} from './styles'

import Clipboard from '../../assets/Clipboard.svg'

export function Home() {
  const [tasksCreated, setTasksCreated] = useState<string[]>([])
  const [taskCreatedCount, setTaskCreatedCount] = useState<number | null>(null)
  const [taskDone, setTaskDone] = useState(0)
  const [newTaskContent, setNewTaskContent] = useState('')

  function taskCounterAddition() {
    setTaskCreatedCount((state) => {
      return state! + 1
    })
  }

  function taskCountSubtraction() {
    if (taskCreatedCount === 1) {
      setTaskCreatedCount(null)
    } else {
      setTaskCreatedCount((state) => {
        return state! - 1
      })
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)

    event.target.setCustomValidity('')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasksCreated([...tasksCreated, newTaskContent])
    setNewTaskContent('')
    taskCounterAddition()
  }

  function handleDeleteTask(taskDeleted: string) {
    const TasksWithoutDeletedOne = tasksCreated.filter((task) => {
      return task !== taskDeleted
    })

    setTasksCreated(TasksWithoutDeletedOne)
    taskCountSubtraction()
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
          <span id="created">{taskCreatedCount}</span>
        </div>
        <div>
          <TaskCreatedAndDone variant="done">Concluídas</TaskCreatedAndDone>
          <span id="done">2 de 5</span>
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
                  <CheckboxRoot defaultChecked id="c1">
                    <CheckboxIndicator>
                      <CheckCircle />
                    </CheckboxIndicator>
                  </CheckboxRoot>
                  <p>{task}</p>
                  <button
                    title="Excluir Task"
                    onClick={() => handleDeleteTask(task)}
                  >
                    <Trash color="#808080" size={18} />
                  </button>
                </TaskContainer>
              )
            })}
          </TaskListContainer>
        ))}
    </HomeContainer>
  )
}
