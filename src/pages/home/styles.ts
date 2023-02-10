import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  hr {
    border-color: #808080;
    margin-bottom: 4rem;
  }
`

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: -5rem;

  input {
    flex: 1;
    border-radius: 8px;
    background-color: #333333;
    color: #fff;
    height: 3.5rem;
    padding: 1rem;
    font-size: 1rem;

    &::placeholder {
      color: #808080;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: blue;
    color: #f2f2f2;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    background-color: #1e6f9f;
  }
`

export const EmptyTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div > p#bold {
    font-size: 16px;
    font-weight: bolder;
    color: #808080;
  }

  div > p#no-bold {
    font-size: 16px;
    color: #808080;
  }
`

export const HeaderTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;

    > span {
      font-weight: bold;
    }
  }
`

interface TaskProps {
  variant: 'created' | 'done'
}

export const TaskCreatedAndDone = styled.p<TaskProps>`
  color: ${(props) => (props.variant === 'created' ? '#4ea8de' : '#8284fa')};
`

export const TaskListContainer = styled.div`
  margin-top: 1.5rem;
`

export const TaskContainer = styled.div`
  background-color: #333333;
  flex: 1;
  height: 4.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  p {
    color: #f2f2f2;
    font-size: 14;
  }
`
