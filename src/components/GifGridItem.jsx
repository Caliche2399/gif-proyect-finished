import React from 'react'

const capitalizeFirstLetters = (str) =>
  str.toLowerCase().split(' ').filter(w => w.length > 0).map(w => w[0].toUpperCase() + w.slice(1)).join(' ')

export const GifGridItem = ({ title, url, index }) => {
  return (
    <article
      className="gif-card"
      style={{ animationDelay: `${(index % 12) * 50}ms` }}
    >
      <img src={url} alt={title} loading="lazy" />
      <div className="gif-card-overlay">
        <p className="gif-card-title">{capitalizeFirstLetters(title)}</p>
      </div>
    </article>
  )
}
