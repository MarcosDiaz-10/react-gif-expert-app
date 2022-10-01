import { useState } from "react";
import { AddCategory, GifGrid } from './components'



export const GifExpertApp = () => {

  const [categories, setCategories] = useState( [ 'Piolin' ] );

  const onAddCategory = ( newCategory ) => {

    if( categories.includes( newCategory ) ) return;

    setCategories( [ newCategory, ...categories ]);
  }  

     
  return (
    <>

    {/* TITULO */}
    <h1>GifExpertApp</h1>

    {/*Intput*/}
    <AddCategory 
      // setCategories= { setCategories } 
      onNewCategory={ onAddCategory }

    />
    
    {/* Listado de Gif*/}

    { categories.map( category => ( 
        <GifGrid key={ category } category={ category }/>
          ))
    }

        {/*Gif Item*/}
        
    </>

  )
}
