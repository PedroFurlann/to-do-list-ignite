import * as Checkbox from '@radix-ui/react-checkbox'
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
    align-items: center;

    > span#created {
      font-weight: bold;
      background-color: #333333;
      border-radius: 9999px;
      height: 1.4rem;
      width: 27px;
      font-size: 14px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    > span#done {
      font-weight: bold;
      background-color: #333333;
      border-radius: 9999px;
      height: 1.4rem;
      width: 53px;
      font-size: 14px;

      display: flex;
      justify-content: center;
      align-items: center;
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
export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  background-color: #5e60ce;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: 0 0 0 2px #4ea8de;

  margin-left: 1rem;
  &[data-state='checked'] {
    box-shadow: none;
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: #fff;
  background-color: #5e60ce;
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;

  svg {
    margin-top: 4px;
    margin-left: 4px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
`

export const LabelContainer = styled.label`
  color: #fff;
  font-size: 15px;
  line-height: 1;
`
