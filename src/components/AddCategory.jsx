import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit =(event) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()

        if(newInputValue.length <= 1 ) return
        onNewCategory(newInputValue)
        setInputValue('')
    }

    return (
      <form className="search-form" onSubmit={onSubmit}>
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          className="search-input"
          type="text"
          placeholder="Search a category…"
          aria-label="Search GIF category"
          value={inputValue}
          onChange={onInputChange}
        />
        <button className="search-btn" type="submit">Search</button>
      </form>
    )
}
