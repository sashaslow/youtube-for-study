import styled from 'styled-components'

export const StyledThemeButton = styled.div`
  color: ${props => props.theme.font_color};
  background-color: ${props => props.theme.main}
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  width: 25px;
  border-width: 0;
  outline: none;
  border: ${props => props.theme.border};
  clip-path: inset(-5px -5px -5px 0px);
  border-radius: 3px;
  margin-left: -3px;
  transition: background-color 0.3s;
`
