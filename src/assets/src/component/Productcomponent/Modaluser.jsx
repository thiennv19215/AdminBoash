import React from 'react'
import { useId } from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export const Modaluser = (props) => {
  const ids = useId()
  const { modal, childhandle, newuse } = props
  const [inputvalue, setInputvalue] = useState({
    id: null,
    title: "",
    brand: "",
    category: "",
    price: ""
  })
  const exitchild = () => {
    childhandle()
  }
  const handleinput = (e) => {
    const { name, value } = e.target
    setInputvalue({
      ...inputvalue,
      [name]: value
    })
  }
  const handlesubmit = () => {
    inputvalue.id = ids
    newuse(
      [inputvalue]
      )
    setInputvalue({
      id: null,
      title: "",
      brand: "",
      category: "",
      price: ""
    })
    newuse
  }


  return (
    <div>
      <Modal size='lg' isOpen={modal} >
        <ModalHeader>tạo sản phẩm mới</ModalHeader>
        <ModalBody>
          <div className="max-w-sm rounded overflow-hidden h-[400px] bg-white shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="color" className="text-gray-700 text-sm">tên sản phẩm:</label>
              <input type="text" id="color" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập Tên sản phẩm" name='title' value={inputvalue.title} onChange={handleinput} />
            </div>

            <div className="mb-4">
              <label htmlFor="color" className="text-gray-700 text-sm">Brand:</label>
              <input type="text" id="color" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập màu sắc" name='brand' value={inputvalue.brand} onChange={handleinput} />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="text-gray-700 text-sm">Phân loại:</label>
              <input type="text" id="category" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập phân loại" name='category' value={inputvalue.category} onChange={handleinput} />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="text-gray-700 text-sm">Giá tiền:</label>
              <input type="text" id="price" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập giá tiền" name='price' value={inputvalue.price} onChange={handleinput} />
            </div>
          </div>



        </ModalBody>
        <ModalFooter>
          <Button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={handlesubmit} >
            lưu
          </Button>
          <Button className='bg-red-700' onClick={exitchild} >
            Cancel
          </Button>

        </ModalFooter>
      </Modal>
    </div>
  )
}
