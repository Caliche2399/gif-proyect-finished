import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Trending'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  const onRemoveCategory = (categoryToRemove) => {
    setCategories(prev => prev.filter(c => c !== categoryToRemove))
  }

  return (
    <div className="app">
      <header className="hero">
        <h1 className="hero-title">GIF<span>Expert</span></h1>
        <p className="hero-subtitle">Search any vibe. Find the perfect GIF.</p>
      </header>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map(category => (
        <GifGrid
          key={category}
          category={category}
          onRemove={() => onRemoveCategory(category)}
        />
      ))}
    </div>
  )
}
