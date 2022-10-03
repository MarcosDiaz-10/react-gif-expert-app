import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas a helper getGifs()', () => { 

    const category = 'Piolin'

    test('Debe devolver un arreglo con los gifs', async() => { 

        const gifs = await getGifs( category );

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
     })

 })