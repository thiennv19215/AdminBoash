import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from './assets/src/page/Homepage'
import Headers from './assets/src/page/Headers'
import Footer from './assets/src/page/Footer'
import axios from 'axios'
import About from './assets/src/page/About'
import { Product } from './assets/src/page/Product'
import Admin from './assets/src/page/Admin'
import { ToastContainer } from 'react-toastify'
function App() {
  const [data, Setdata] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("https://654347ec01b5e279de201e8f.mockapi.io/ask/users");
      Setdata(data.data)
    }
    getdata()
  }, [])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='max-w-5xl mx-auto'>
        <Headers />
        <Routes>
          <Route path='/' element={<Homepage data={data} />} />
          <Route path='/About' element={<About />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Admin' element={<Admin />} />
        </Routes>
        <Footer />
      </div>

    </>

  )


}

export default App
