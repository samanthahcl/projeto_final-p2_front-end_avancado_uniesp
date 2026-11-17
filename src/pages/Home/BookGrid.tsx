import { BookCard } from '../../components/BookCard'
import type { BookCardLivro } from '../../components/BookCard'
import './BookGrid.css'

type BookGridProps = {
  livros: BookCardLivro[]
  onAbrirDetalhes?: (id: string) => void
}

export function BookGrid({ livros, onAbrirDetalhes }: BookGridProps) {
  return (
    <ul className="book-grid" aria-label="Livros">
      {livros.map((livro) => (
        <li className="book-grid__item" key={livro.id}>
          <BookCard livro={livro} onAbrirDetalhes={onAbrirDetalhes} />
        </li>
      ))}
    </ul>
  )
}
