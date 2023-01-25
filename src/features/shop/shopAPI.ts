import axios from 'axios'
import { Games } from '../../models/games';

const server = 'http://127.0.0.1:8000/games_list/games/'

export function getShop() {
    return new Promise<{ data: Games[] }>((resolve) =>
    axios.get(server).then((res) => resolve({data: res.data}))
    );
  }

  
  