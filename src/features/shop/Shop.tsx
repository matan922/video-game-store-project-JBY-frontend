import React from 'react'
import { getShopAsync, selectGameList } from './shopSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const Shop: React.FC = () => {
    const dispatch = useAppDispatch();
    const games = useAppSelector(selectGameList)
    return (
        <div>
            <h1>Games list!</h1>
                <button onClick={() => dispatch(getShopAsync())}>Get Data</button>
                {games.map((game, i) => <div key={i}>game name: {game.game_name}</div>)}
        </div>
    )
}

export default Shop