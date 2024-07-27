import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Trending = () => {

  const [trending, setTrending] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/search/trending'


  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    })
  }, [])

  return (
    <div className="rounded-div my-12 py-8 text-primary overflow-hidden">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin, index) =>
          <Link key={index} to={`/coin/${coin.item.id}`}>

            <div key={coin.item.id} className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300">
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <img className="rounded-full mr-4" src={coin.item.small} alt="/" />
                  <div>
                    <p>{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>
              </div >
              <div className="flex items-center mr-10">
                <img className="h-5 w-5 mr-2" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="/" />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </Link>

        )}
      </div>
    </div>
  )
}
