import { getGifs } from "../../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
    test('debe traer 10 elementos', async() => {

        const gifs = await getGifs('One Puncha');

        expect( gifs.length).toBe(10);
    })


    test('debe mostar 0 cuando se le pasa el argumento vacio', async() => {

        const gifs = await getGifs('');

        expect( gifs.length).toBe(0);
    })
    
})
