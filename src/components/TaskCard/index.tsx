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
  return isCompleted === false ? (
    <TaskContainer>
      <button onClick={() => onToggleIsCompleted(content)}>
        <Circle size={24} />
      </button>
      <p>{content}</p>
      <button onClick={() => onRemoveTask(content)}>
        <Trash />
      </button>
    </TaskContainer>
  ) : (
    <TaskContainer>
      <button onClick={() => onToggleIsCompleted(content)}>
        <CheckCircle size={24} />
      </button>
      <p style={{ textDecoration: 'line-through', color: '#808080' }}>
        {content}
      </p>
      <button onClick={() => onRemoveTask(content)}>
        <Trash />
      </button>
    </TaskContainer>
  )
}
