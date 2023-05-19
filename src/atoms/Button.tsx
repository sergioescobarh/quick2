import React from 'react'
import Link from 'next/link';
type Props = {'text':string, 'link':string}

export default function Button({text,link}: Props) {
  return (
    <Link href={link} className='linkButton' >
        <button> {text} </button>
    </Link>
  )
}
