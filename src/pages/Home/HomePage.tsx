import type { BookCardLivro } from '../../components/BookCard'
import { BookGrid } from './BookGrid'
import './HomePage.css'

type HomePageProps = {
  livros?: BookCardLivro[]
  onAbrirDetalhes?: (id: string) => void
}

export function HomePage({ livros = [], onAbrirDetalhes }: HomePageProps) {
  return (
    <main className="home-page">
      <header className="home-page__intro">
        <p className="home-page__label">Portal dos Livros</p>
        <h1>Encontre sua próxima leitura</h1>
        <p>Explore livros e descubra novas histórias.</p>
      </header>

      <section className="home-page__catalog" aria-labelledby="titulo-livros">
        <div className="home-page__heading">
          <h2 id="titulo-livros">Livros</h2>
          {livros.length > 0 && (
            <span>{livros.length} {livros.length === 1 ? 'livro' : 'livros'}</span>
          )}
        </div>

        {livros.length > 0 ? (
          <BookGrid livros={livros} onAbrirDetalhes={onAbrirDetalhes} />
        ) : (
          <div className="home-page__empty">
            <p>Os livros aparecerão aqui quando a listagem estiver disponível.</p>
          </div>
        )}
      </section>
    </main>
  )
}
