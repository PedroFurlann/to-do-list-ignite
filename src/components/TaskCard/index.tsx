import { Check, CheckCircle, Circle, Trash } from 'phosphor-react'
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
      <button
        onClick={() => onToggleIsCompleted(content)}
        style={{ boxShadow: 'none', marginLeft: 12 }}
      >
        <Circle size={24} color="#4EA8DE" />
      </button>
      <p>{content}</p>
      <button onClick={() => onRemoveTask(content)}>
        <Trash size={20} color="#808080" />
      </button>
    </TaskContainer>
  ) : (
    <TaskContainer>
      <button
        onClick={() => onToggleIsCompleted(content)}
        style={{
          boxShadow: 'none',
          marginLeft: 12,
          border: 'none',
          borderRadius: '100%',
          backgroundColor: '#5E60CE',
          padding: 0,
          width: 25,
          height: 25,
        }}
      >
        <Check
          color="#fff"
          size={16}
          weight="bold"
          style={{ marginTop: 4, marginRight: 1 }}
        />
      </button>
      <p style={{ textDecoration: 'line-through', color: '#808080' }}>
        {content}
      </p>
      <button onClick={() => onRemoveTask(content)}>
        <Trash size={20} color="#808080" />
      </button>
    </TaskContainer>
  )
}
