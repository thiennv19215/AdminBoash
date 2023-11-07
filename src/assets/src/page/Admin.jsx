
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Admin(props) {
  const { data, deletitem } = props
  const handlebtn = (id) => {
    const isconfomrm = window.confirm("bạn muốn xóa k")
    if (isconfomrm) {
      deletitem(id)
      toast("xóa thành công")}
  }
  return (

    <>
      <div className="news">
        <h2 className="text-3xl p-4">Quản lý sản phẩm</h2>
      </div>
      <div className="newss">
        <table className="border-collapse w-full">
          <thead>
            <tr className="border">
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item.id} className="border">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handlebtn(`${item.id}`)} className="btn px-4 bg-orange-600 rounded">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Admin