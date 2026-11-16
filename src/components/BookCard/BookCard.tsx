import { useState } from 'react'
import './BookCard.css'

/**
 * Contrato mínimo de apresentação.
 * A interface Livro do Integrante 2 é estruturalmente compatível com estes campos.
 */
export interface BookCardLivro {
  id: string
  titulo: string
  autores: string[]
  capaUrl?: string
}

interface BookCardProps {
  livro: BookCardLivro
  onAbrirDetalhes?: (id: string) => void
}

export function BookCard({ livro, onAbrirDetalhes }: BookCardProps) {
  const [urlComErro, setUrlComErro] = useState<string | null>(null)
  const capaDisponivel = Boolean(livro.capaUrl && livro.capaUrl !== urlComErro)
  const autores = livro.autores.length > 0
    ? livro.autores.join(', ')
    : 'Autor não informado'

  return (
    <article className="book-card">
      <div className="book-card__cover">
        {capaDisponivel ? (
          <img
            src={livro.capaUrl}
            alt={`Capa do livro ${livro.titulo}`}
            loading="lazy"
            onError={() => setUrlComErro(livro.capaUrl ?? null)}
          />
        ) : (
          <div className="book-card__placeholder" role="img" aria-label="Capa não disponível">
            <span aria-hidden="true">📚</span>
            <span>Sem capa</span>
          </div>
        )}
      </div>

      <div className="book-card__content">
        <h3 className="book-card__title" title={livro.titulo}>{livro.titulo}</h3>
        <p className="book-card__authors" title={autores}>{autores}</p>
        {onAbrirDetalhes && (
          <button
            className="book-card__button"
            type="button"
            onClick={() => onAbrirDetalhes(livro.id)}
            aria-label={`Ver detalhes do livro ${livro.titulo}`}
          >
            Ver detalhes
          </button>
        )}
      </div>
    </article>
  )
}
