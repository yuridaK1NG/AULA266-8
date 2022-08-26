import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';
import Pcgamer from './Paginas/PcGamer/Pcgamer';
import Lancamento from './Paginas/Lacamento/Lancamento'
import Oferta from './Paginas/Oferta/Oferta'

export default function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/sobre" element={ <Sobre /> } />
            <Route path="/pcgamer" element={ <Pcgamer/> } />
            <Route path="/lancamento" element={ <Lancamento/> } />
            <Route path="/oferta" element={ <Oferta/> } />
        </Routes>
    </BrowserRouter>
  )
}
