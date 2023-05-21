import React, { useEffect, useState } from 'react'

type Props = { search: string}
type Shore = {'text': string, 'completed': boolean, 'extraInfo': string};

let temporalShores = [
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' },
    { 'text': 'comer pastel', 'completed': false, 'extraInfo': '' }];

export default function ShoresContainer({ search }: Props) {
    const [shores,setShores] = useState<Shore[]>(temporalShores);
        let x:Shore[]= [];
        for(let i =0;i<temporalShores.length;i++){
            if(temporalShores[i].text.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                x.push(temporalShores[i]);
                setShores(x);
            }
        }
    
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