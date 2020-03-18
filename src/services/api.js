import axios from 'axios';

const api = axios.create({baseURL: 'https://pokeapi.co/api/v2/'});
const apiSprite = axios.create({baseURL: 'http://pokeapi.co/media/sprites/pokemon/'});

export {api, apiSprite};