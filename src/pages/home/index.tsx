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
  text: string
  isCompleted: boolean
}

export function Home() {
  const [tasksCreated, setTasksCreated] = useState<TaskProps[]>([])
  const [taskCreatedCount, setTaskCreatedCount] = useState<number | null>(null)
  const [taskDone, setTaskDone] = useState(0)
  const [newTaskContent, setNewTaskContent] = useState('')

  function handleToggleTaskDoneState(taskContent: string) {
    // eslint-disable-next-line array-callback-return
    tasksCreated.map((task) => {
      if (task.text === taskContent) {
        if (task.isCompleted === false) {
          task.isCompleted = true
          setTaskDone((state) => state + 1)
        } else {
          task.isCompleted = false
          setTaskDone((state) => state - 1)
        }
      }
    })
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

    const newTask = {
      text: newTaskContent,
      isCompleted: false,
    }

    setTasksCreated((state) => [...state, newTask])

    setNewTaskContent('')

    taskCounterAddition()
  }

  function handleRemoveTask(taskContent: string) {
    setTasksCreated(tasksCreated.filter((task) => task.text !== taskContent))

    taskCountSubtraction()
    setTaskDone((state) => state - 1)
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

      {tasksCreated.length <= 0 ||
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
                content={task.text}
                isCompleted={task.isCompleted}
                key={task.text}
                onRemoveTask={() => handleRemoveTask(task.text)}
                onToggleIsCompleted={() => handleToggleTaskDoneState(task.text)}
              />
            ))}
          </TaskListContainer>
        ))}
    </HomeContainer>
  )
}
