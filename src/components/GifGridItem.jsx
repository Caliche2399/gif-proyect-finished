import React from 'react'
import { Card } from 'react-bootstrap'

export const GifGridItem = ({title, url}) => {

  const capitalizeFirstLetters =(str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
  }

  return (
    <Card style={{width: "100%", maxWidth: '400px', objectFit: 'cover' }}>
      <Card.Img style={{height: "100%", maxHeight: '300px'}} variant="top" src={url} />
      <Card.Body className='rounded'>
        <Card.Title>{capitalizeFirstLetters(title)}</Card.Title>
      </Card.Body>
    </Card>
  )
}
