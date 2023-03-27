/* eslint-disable no-unused-vars */
import { PlusCircle, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
// import { SearchForm } from '../components/SearchForm'
import {
  EmptyTaskContainer,
  HeaderTaskContainer,
  HomeContainer,
  SearchFormContainer,
  TaskListContainer,
  TaskCreatedAndDone,
} from './styles'

import Clipboard from '../../assets/Clipboard.svg'
import { TaskCard } from '../../components/TaskCard'

interface TaskProps {
  id: number
  text: string
  isCompleted: boolean
}

export function Home() {
  const [tasksCreated, setTasksCreated] = useState<string[]>([])
  const [taskCreatedCount, setTaskCreatedCount] = useState<number | null>(null)
  const [taskDone, setTaskDone] = useState(0)
  const [newTaskContent, setNewTaskContent] = useState('')
  const [taskDoneState, setTaskDoneState] = useState(false)

  function handleToggletaskDoneState(task: string) {
    if (taskDoneState === false) {
      setTaskDoneState(true)
      setTaskDone((state) => state + 1)
    } else {
      setTaskDoneState(false)
      setTaskDone((state) => state - 1)
    }
  }

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

  function handleCreateNewTask() {
    event?.preventDefault()

    setTasksCreated((state) => [...state, newTaskContent])

    setNewTaskContent('')

    taskCounterAddition()
  }

  function handleRemoveTask(taskContent: string) {
    setTasksCreated(tasksCreated.filter((task) => task !== taskContent))

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
          {taskCreatedCount === null ? (
            <div>
              <TaskCreatedAndDone variant="done">Concluídas</TaskCreatedAndDone>
              <span id="done">{taskDone} de 0</span>
            </div>
          ) : (
            <div>
              <TaskCreatedAndDone variant="done">Concluídas</TaskCreatedAndDone>
              <span id="done">
                {taskDone} de {taskCreatedCount}
              </span>
            </div>
          )}
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
            {tasksCreated.map((task) => (
              <TaskCard 
                content={task}
                isCompleted={taskDoneState}
                key={task}
                onRemoveTask={() => handleRemoveTask(task)}
                onToggleIsCompleted={}
              />
            ))}
          </TaskListContainer>
        ))}
    </HomeContainer>
  )
}
