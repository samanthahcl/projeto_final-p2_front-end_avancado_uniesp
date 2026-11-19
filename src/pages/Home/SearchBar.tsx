import { useState } from 'react'
import type { FormEvent } from 'react'
import './SearchBar.css'

type SearchBarProps = {
  onBuscar: (termo: string) => void
}

export function SearchBar({ onBuscar }: SearchBarProps) {
  const [termo, setTermo] = useState('')

  function buscar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onBuscar(termo.trim())
  }

  return (
    <form className="search-bar" role="search" onSubmit={buscar}>
      <label className="search-bar__label" htmlFor="pesquisa-livros">
        Pesquisar livros
      </label>
      <div className="search-bar__controls">
        <input
          id="pesquisa-livros"
          className="search-bar__input"
          type="search"
          value={termo}
          onChange={(event) => setTermo(event.target.value)}
          placeholder="Digite o título ou autor"
          maxLength={120}
        />
        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}
