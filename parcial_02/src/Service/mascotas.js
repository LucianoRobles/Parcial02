export function getMascotas(){
    service = {
        url : 'https://dog.ceo/api/breeds/image/random'
    }
    return fetch(service);
}