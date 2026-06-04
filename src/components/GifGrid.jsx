import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifGridItem } from "./GifGridItem"

const SkeletonCard = ({ index }) => (
  <div className="skeleton-card" style={{ animationDelay: `${index * 60}ms` }} aria-hidden="true" />
)

export const GifGrid = ({ category, onRemove }) => {

  const { images, isLoading, isLoadingMore, hasMore, loadMore } = useFetchGifs(category)

  return (
    <section className="category-section">
      <div className="category-header">
        <h3 className="category-title">{category}</h3>
        <button
          className="remove-btn"
          onClick={onRemove}
          aria-label={`Remove ${category}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="gif-bento-grid">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} index={i} />)
          : images.map((image, i) => (
            <GifGridItem key={image.id} index={i} {...image} />
          ))
        }
      </div>

      {!isLoading && hasMore && (
        <div className="load-more-wrap">
          <button
            className="load-more-btn"
            onClick={loadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? (
              <span className="load-more-spinner" aria-hidden="true" />
            ) : null}
            {isLoadingMore ? 'Loading…' : 'Load more'}
          </button>
        </div>
      )}
    </section>
  )
}
