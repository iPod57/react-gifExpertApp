import React, {useEffect,useState} from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridImagen } from './GifGridImagen'

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const {data: images, loading} = useFetchGifs(category);

    return ( 
        <>
        <h3>{category}</h3>
        {loading? <p className="animate_flash">Loading</p>:null} 


        <div className="card-grid contenedor">
            {
                images.map(gif => (
                    <GifGridImagen
                        key={gif.id}{...gif}
                    />
                ))
            }
            
        </div>
        </>
    )
}

//<li key={gif.id}>{gif.title}</li>  
