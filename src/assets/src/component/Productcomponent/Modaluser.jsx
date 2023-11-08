import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export const Modaluser = (props) => {
  const { modal, childhandle } = props
  const exitchild = () => {
    childhandle()
  }
  return (
    <div>
      <Modal size='lg' fade="false" isOpen={modal} >
        <ModalHeader>tạo sản phẩm mới</ModalHeader>
        <ModalBody>
          <div class="max-w-sm rounded overflow-hidden h-[400px] bg-white shadow-md p-6">
            <div class="mb-4">
              <label for="color" class="text-gray-700 text-sm">tên sản phẩm:</label>
              <input type="text" id="color" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập Tên sản phẩm" />
            </div>

            <div class="mb-4">
              <label for="color" class="text-gray-700 text-sm">Màu sắc:</label>
              <input type="text" id="color" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập màu sắc" />
            </div>

            <div class="mb-4">
              <label for="category" class="text-gray-700 text-sm">Phân loại:</label>
              <input type="text" id="category" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập phân loại" />
            </div>

            <div class="mb-4">
              <label for="price" class="text-gray-700 text-sm">Giá tiền:</label>
              <input type="text" id="price" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Nhập giá tiền" />
            </div>
          </div>



        </ModalBody>
        <ModalFooter>
          <Button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={exitchild} >
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
