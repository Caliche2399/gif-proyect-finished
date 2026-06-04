import { useState, useEffect, useCallback } from "react"
import { obtenerGifs } from "../GetGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    const fetchGifs = useCallback(async (currentOffset, append) => {
        if (append) setIsLoadingMore(true)
        else setIsLoading(true)

        const { gifs, totalCount } = await obtenerGifs(category, currentOffset)

        setImages(prev => append ? [...prev, ...gifs] : gifs)
        setHasMore(currentOffset + gifs.length < totalCount)
        setIsLoading(false)
        setIsLoadingMore(false)
    }, [category])

    useEffect(() => {
        setImages([])
        setOffset(0)
        setHasMore(true)
        fetchGifs(0, false)
    }, [category])

    const loadMore = () => {
        const nextOffset = offset + 12
        setOffset(nextOffset)
        fetchGifs(nextOffset, true)
    }

    return { images, isLoading, isLoadingMore, hasMore, loadMore }
}
