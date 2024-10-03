import { useState, useEffect } from "react"
import { obtenerGifs } from "../GetGifs"
import { GifGridItem } from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {
    
  const {images, isLoading} = useFetchGifs(category)

  return (
    <div className="py-5">
      <h3>{category}</h3>

      {
        isLoading && (<h2>CARGANDO</h2>)
      }

      <div className="d-flex flex-row gap-3 justify-content-center flex-wrap">
        {
          images.map((image) => (
            <GifGridItem 
                key={image.id} 
                {...image}
            />
          ))
        }
      </div>
    </div>
)
}
