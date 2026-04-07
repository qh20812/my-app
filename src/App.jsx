import React, { useState } from 'react'
import Product from './pages/Product'
import MyProfile from './pages/MyProfile'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [page, setPage] = useState('product')

  return (
    <>
      <Navbar active={page} onNavigate={setPage} />
      <main className="app-content">
        {page === 'product' ? <Product /> : <MyProfile />}
      </main>
    </>
  )
}

export default App