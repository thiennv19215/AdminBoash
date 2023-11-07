import { useCallback, useEffect, useState } from 'react'
import './App.css'
import './App.scss'
import { Routes, Route, useParams } from 'react-router-dom'
import { Homepage } from './assets/src/page/Homepage'
import Headers from './assets/src/page/Headers'
import Footer from './assets/src/page/Footer'
import axios from 'axios'
import About from './assets/src/page/About'
import { Product } from './assets/src/page/Product'
import Admin from './assets/src/page/Admin'
import { ToastContainer } from 'react-toastify'
import Details from './assets/src/component/Details'
import Loading from './assets/src/component/loading'
function App() {
  const [data, Setdata] = useState([])
  
  const [isload, setIsload] = useState(false)
  const deletitem = (id) => {
    const newdata = data.filter(item => item.id !== id)
    Setdata(newdata)
  }
  useEffect(() => {
    setIsload(true)
    const getdata = async () => {
      const data = await axios.get("https://654347ec01b5e279de201e8f.mockapi.io/ask/users");
      Setdata(data.data)
      setIsload(false)
    }
    getdata()
  }, [])
  console.log("rennder");
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
        {isload && <Loading />}
        <Headers />
        <Routes>
          <Route path='/' element={<Homepage data={data} />} />
          <Route path='/About' element={<About />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Admin' element={<Admin deletitem={deletitem} data={data} />} />
          <Route path='/detail/:id' element={<Details data={data} />} />
        </Routes>
        <Footer />

      </div>
    </>

  )


}

export default App
