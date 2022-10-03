import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas a GifItem', () => { 

    const title = 'Dragon Ball';
    const url = 'https://media3.giphy.com/media/IAi0BAedyQp6L0olPb/giphy.gif?cid=5ebce28cnrtk6zgvkwutk7l0ujyn1tejy09s2a6rlyuupufw&rid=giphy.gif&ct=g';    

    test('Debe hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title={ title } url={ url }/>)

        expect( container ).toMatchSnapshot();
     })

     test('Debe de mostrar la imagen con el URL indicado y el ALT indicado', () => { 

        render( <GifItem title={ title } url={ url }/>);
        //   screen.debug();

        // expect ( screen.getByRole('img').src ).toBe( url )         
        // expect ( screen.getByRole('img').alt).toBe( title )         

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url);
        expect( alt ).toBe( title );
      })

      test('Debe de mostrar el titulo en el componente', () => { 

        render( <GifItem title={ title } url={ url }/>)

        expect( screen.getByText( title )).toBeTruthy();

       })
 })