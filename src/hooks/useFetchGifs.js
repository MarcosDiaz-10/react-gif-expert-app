import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    useEffect( () => {
        getGifs( category )
            .then( ( imgs ) => {
                setImages( imgs);
                setIsLoading(false);
            })
            .catch( err =>  console.log( err ))

    }, [] )


  return {
    images,
    isLoading
  }
}
