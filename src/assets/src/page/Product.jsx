import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Listproduct from '../component/Productcomponent/Listproduct'
import { Modaluser } from '../component/Productcomponent/Modaluser'
export const Product = () => {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(true)
  const [modal, setModal] = useState(false);


  useEffect(() => {
    const handledata = async () => {
      const res = await axios.get("https://dummyjson.com/products")
      const datas = res.data.products
      setData(datas);
    }
    handledata()
  }, [])

  const handlestatus = () => {
    setModal(!modal)
  }
  return (
    <div className='py-2'>
      <Modaluser
        modal={modal}
        childhandle={handlestatus}
         />

      <div className='py-3'>
        <button onClick={handlestatus} className='py-2 px-6 bg-[#488aec] text-white flex rounded text-center shadow-xl'>thêm sản phẩm</button>
      </div>

      {limit && <Listproduct data={data} handlestatus={() => handlestatus} />}
    </div>
  )
}
