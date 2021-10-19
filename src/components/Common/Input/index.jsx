import { memo } from 'react'

import { FormGroup, InputContainer, Label } from './styles'

const Input = ({ text, helperText, ...props}) => {
  return (
    <FormGroup>
      {text && <Label>{text}</Label>}
      <InputContainer {...props} />
      {helperText && <p>This field is required</p>}
    </FormGroup>
  )
}

export default memo(Input)