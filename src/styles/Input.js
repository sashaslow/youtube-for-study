import styled from 'styled-components'
import { DebounceInput } from 'react-debounce-input'

export const Input = styled(DebounceInput)`
  display: block;
  border-radius: 3px;
  border-bottom: none;
  border-right: none;
  padding: 0.25em 1em;
  cursor: pointer;
  margin: 0 auto;
  background: transparent;
  color: rgb(140, 140, 140);
  background-color: ${props => props.theme.main};
  width: 700px;
  height: 30px;
  outline: none;
  font-size: 18px;
  text-align: center;
  transition: background-color 0.3s;
  &:hover,
  focus {
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`
