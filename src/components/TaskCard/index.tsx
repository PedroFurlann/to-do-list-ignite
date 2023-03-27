import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { TaskContainer } from './styles'

interface TaskCardProps {
  isCompleted: boolean
  content: string

  onRemoveTask: (taskContent: string) => void
  onToggleIsCompleted: (taskContent: string) => void
}

export function TaskCard({
  content,

  onRemoveTask,
  onToggleIsCompleted,
  isCompleted = false,
}: TaskCardProps) {
  return () => {
    isCompleted === false ? (
      <TaskContainer>
        <Circle />
        <p>{content}</p>
        <button onClick={() => onRemoveTask(content)}>
          <Trash />
        </button>
      </TaskContainer>
    ) : (
      <TaskContainer>
        <CheckCircle />
        <p>{content}</p>
        <button onClick={() => onRemoveTask(content)}>
          <Trash />
        </button>
      </TaskContainer>
    )
  }
}
