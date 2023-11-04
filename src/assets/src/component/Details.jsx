import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Details({ data }) {
    const { id } = useParams()
    const [datas, setDatas] = useState([])
    useEffect(() => {
        setDatas(data)
    }, [id])
    const newid = datas.filter(item => item.id === id)
    return (
        <>
            {newid.map((item, key) => <div key={key} className='text-center flex justify-center'>
                <div>
                    {item.title}
                    <img src={item.avatar} alt="" />
                    <span>{item.name}</span>
                </div>

            </div>
            )}
        </>
    )
}

export default Details