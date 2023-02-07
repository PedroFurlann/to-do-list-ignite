import styled from 'styled-components'

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
