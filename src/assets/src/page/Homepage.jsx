// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


export const Homepage = ( data ) => {
  return (
    <>
      <div>
        <img src="https://picsum.photos/1200/250" />
        <div className="news">
          <h2 className="text-3xl p-4">tin tuc hop tap</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center rounded-s-none">
          {data.data?.map((item) => {
              return <div key={item.id} className='border py-4'>
              <a className="flex justify-center" href="/">
                <img src={item.avatar} />
              </a>
              <h3 className="text-2xl">{item.name}</h3>
              <span><Link to ={`/Product/${item.id}`}  className = "text-2xl text-fuchsia-800" >
                  {item.title}
                </Link></span>
            </div>
          })}
        </div>

      </div>
    </>
  )
}
