import styled from 'styled-components'

export const TaskContainer = styled.div`
  background-color: #333333;
  flex: 1;
  height: 4.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  flex-wrap: wrap;

  button {
    margin-right: 1rem;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`
