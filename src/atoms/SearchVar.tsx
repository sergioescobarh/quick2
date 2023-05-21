import React, { ChangeEvent } from 'react'
import { useState } from 'react';


type Props = { setSearch: (value: string) => void; };

export default function SearchVar({ setSearch }: Props) {
    
    const typing = (event:ChangeEvent<HTMLInputElement>):void => {
       event.target ? setSearch(event.target.value) : null;
    };

    return (
        <>
            <h1>Shores</h1>
            <input type="text" onChange={typing}/> 
            <img src="" alt="lupa" />
        </>
    )
}