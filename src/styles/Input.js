import styled from 'styled-components'
import {DebounceInput} from 'react-debounce-input';

export const Input = styled(DebounceInput)`
  display: block;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 auto;
  background: transparent;
  background-color: ${props => props.theme.main};
  width: 700px;
  height: 20px;
  outline: none;
  font-size: 18px;
  text-align: center;
`
