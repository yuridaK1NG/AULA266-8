import React from 'react'
import { Link } from 'react-router-dom'

export default function Sobre() {
  return (
    <div>
      <h1>SOBRE A PAGINA</h1>

      <Link to="/">
        <button>
          HOME
        </button>
      </Link>
    </div>
  )
}
