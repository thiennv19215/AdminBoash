import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const [data, Setdata] = useState([])
  const [id, setid] = useState("0")
  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("https://654347ec01b5e279de201e8f.mockapi.io/ask/users");
      Setdata(data.data)
    }
    getdata()
  }, [id])

  const handlebtn = async (id) => {

    const yesno = window.confirm("bạn có muốn xóa không")
    if (yesno) {
      await axios.delete(`https://654347ec01b5e279de201e8f.mockapi.io/ask/users/${id}`);
      setid(id)
      toast("xóa thành công");
    } else {
      toast.warning("Hủy Lệnh xóa ");

    }
  }

  return (

    <div>
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
                <td>{index + 1}</td>
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

    </div>
  )
}

export default Admin