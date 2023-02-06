import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input: {
    flex: 1;
    border-radius: 8px;
    border: 0;
    background-color: #262626;
    color: #fff;
    padding: 1rem;

    &:hover
  }

  button: {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    color: #f2f2f2;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
  }
`
