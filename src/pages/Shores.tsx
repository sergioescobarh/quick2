import React from 'react'

type Props = {}

export default function Shores({}: Props) {
  return (
    <main className='shoresMain'>
        <section className='shores1'>
            <div className='shoresHeader'>  
                <h1>Shores</h1>
                <div><input type="text" /> <img src="" alt="lupa" /></div>
                <div>3shores done of 5</div>
            </div>
            <ul className='shoresContainer'>
                <li>comer</li>
                <li>comer</li>
                <li>comer</li>
                <li>comer</li>
                <li>comer</li>
            </ul>
            <img src="" alt="agregar tarea" />
        </section>
        <section className='shores2'></section>
    </main>
  )
}