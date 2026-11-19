import { useState } from 'react'
import type { BookCardLivro } from '../../components/BookCard'
import { BookGrid } from './BookGrid'
import { SearchBar } from './SearchBar'
import './HomePage.css'

type HomePageProps = {
  livros?: BookCardLivro[]
  onAbrirDetalhes?: (id: string) => void
}

export function HomePage({ livros = [], onAbrirDetalhes }: HomePageProps) {
  const [termoBusca, setTermoBusca] = useState('')
  const termo = termoBusca.toLocaleLowerCase('pt-BR')
  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLocaleLowerCase('pt-BR').includes(termo) ||
    livro.autores.some((autor) => autor.toLocaleLowerCase('pt-BR').includes(termo))
  )

  return (
    <main className="home-page">
      <header className="home-page__intro">
        <p className="home-page__label">Portal dos Livros</p>
        <h1>Encontre sua próxima leitura</h1>
        <p>Explore livros e descubra novas histórias.</p>
      </header>

      <SearchBar onBuscar={setTermoBusca} />

      <section className="home-page__catalog" aria-labelledby="titulo-livros">
        <div className="home-page__heading">
          <h2 id="titulo-livros">Livros</h2>
          {livros.length > 0 && (
            <span>{livrosFiltrados.length} {livrosFiltrados.length === 1 ? 'livro' : 'livros'}</span>
          )}
        </div>

        {livrosFiltrados.length > 0 ? (
          <BookGrid livros={livrosFiltrados} onAbrirDetalhes={onAbrirDetalhes} />
        ) : (
          <div className="home-page__empty">
            <p>
              {livros.length === 0
                ? 'Os livros aparecerão aqui quando a listagem estiver disponível.'
                : 'Nenhum livro encontrado para esta busca.'}
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
