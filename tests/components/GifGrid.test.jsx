import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas a GifGrid', () => { 

    const category = 'Piolin';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } />)

        expect( screen.getByText(category) ).toBeTruthy();
        expect( screen.getByText('Cargando...') ).toBeTruthy();

     })

     test('Debe de mostrar cuando se cargan las imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id:'jsldfj',
                title: 'Piolin',
                url: 'https://piolin.com/Gifpiolin.jpg'
            },
            {
                id:'jsldfjg',
                title: 'Valorant',
                url: 'https://valorant.com/Gifvalorant.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category } />)

        expect( screen.getAllByRole('img').length).toBe( 2 )

      })
 })