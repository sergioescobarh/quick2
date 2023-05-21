import SearchVar from '@/atoms/SearchVar'
import ShoresContainer from '@/molecules/ShoresContainer'
import React from 'react'
import { useState } from 'react'
type Props = {}

export default function Shores({}: Props) {

  const [search, setSearch]=useState<string>("");

  return (
    <main className='shoresMain'>
        <section className='shores1'>
            <div className='shoresHeader'>  
                <SearchVar setSearch={setSearch} />
                <div>3shores done of 5</div>
            </div>
            <ShoresContainer search={search} />
            <img src="" alt="agregar tarea" />
        </section>
        <section className='shores2'></section>
    </main>
  )
}