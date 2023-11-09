import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Listproduct from '../component/Productcomponent/Listproduct'
import { Modaluser } from '../component/Productcomponent/Modaluser'
export const Product = () => {
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false);

  //staste
  useEffect(() => {
    const handledata = async () => {
      const res = await axios.get("https://dummyjson.com/products")
      const datas = res.data.products
      setData(datas);
    }
    handledata()
  }, [])
  //unmout // mouted
  const handlestatus = () => {
    setModal(!modal)
  }
  //ham nhan trạng thái
  const newuse = (item)=> {
    const news = item.concat(data)
   setData(news, ...data)
   setModal(false)
  }
  //thêm use

  //xóa
  
  return (
    <div className='py-2'>
      <Modaluser
        modal={modal}
        newuse={newuse}
        childhandle={handlestatus}
      />

      <div className='py-3'>
        <button onClick={handlestatus}
          className='py-2 px-6 bg-[#488aec] text-white flex rounded text-center shadow-xl'
        >thêm sản phẩm</button>
      </div>

      <Listproduct data={data} handlestatus={() => handlestatus} />
    </div>
  )
}
