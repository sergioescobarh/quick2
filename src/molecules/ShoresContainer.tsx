import React, { useEffect, useState } from 'react'

type Props = { search: string , shores: Shore[]}
type Shore = {'text': string, 'completed': boolean, 'extraInfo': string};

let temporalShores = [
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' }];

export default function ShoresContainer({ search, shores}: Props) {
    
        
    
    return (
        <ul className='shoresContainer'>
            {shores.map( i => <li key={Date.now()}>
                <img src="" alt="delete" />
                <p>comer pastel</p>
                <img src="" alt="done" />
            </li>)}
        </ul>
    )
}