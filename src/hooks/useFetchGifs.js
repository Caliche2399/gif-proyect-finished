import { useState, useEffect } from "react"
import { obtenerGifs } from "../GetGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await obtenerGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect( () =>{
        getImages()
    }, [])


    return {
        images,
        isLoading
    }
}