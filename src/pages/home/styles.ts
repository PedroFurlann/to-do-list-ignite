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

export const EmptyTableContainer = styled.div`
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

export const HeaderTableContainer = styled.div`
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

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: #333333;
    margin-bottom: 10rem;

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`
