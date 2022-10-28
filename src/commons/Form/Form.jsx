import { useState } from 'react'
import cn from 'classnames'
import './Form.css'

export const Form = () => {
  const [active, setActive] = useState(false)
  return (
    <div className="form">
      <div className="form__title">Fill in the form and tell us abour your project</div>
      <input className="form__input" placeholder='Name' />
      <input className="form__input" placeholder='Email' />
      <input className="form__input" placeholder='About your project [optional]' />
      <button className={cn("form__button", { ['form__button_active']: active })} data-cursor-size="8px" onClick={() => setActive(true)}>Let's go!</button>
    </div>
  )
}