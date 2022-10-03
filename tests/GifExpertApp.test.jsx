import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas a GifExpertApp', () => { 

    test('Debe hacer match con el snapshot', () => { 

        const { container } = render( <GifExpertApp/>)

        expect( container ).toMatchSnapshot();

     })   

     test('Debe de mostrar la una nueva categoria ', () => { 

        render( <GifExpertApp/>)

        const input = screen.getByRole( 'textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Dragon Ball'} })
        fireEvent.submit( form )
        
        expect( screen.getAllByRole( 'heading', { level: 3 }).length ).toBe( 2 );

      })

     test('No debe de mostrar una nueva categoria cuando sea igual', () => { 

        render( <GifExpertApp/>)

        const input = screen.getByRole( 'textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Piolin'} })
        fireEvent.submit( form )
        
        expect( screen.getAllByRole( 'heading', { level: 3 }).length ).toBe( 1 );

      })

 })