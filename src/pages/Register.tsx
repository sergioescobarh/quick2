import React from 'react'

type Props = {}

export default function Register({}: Props) {
  return (
    <form className='registerForm'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />    
        <button>enviar</button>

    </form>
  )
}