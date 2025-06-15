import React from 'react'
import img1 from "./assets/gambar3.png"
import img2 from "./assets/gambar4.jpg"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Populeritas = () => {
  return (
    <div className='page-populeritas'>
      <Navbar />
      <div className="container"> {/* Tambahkan div container disini */}
        <div className="text">
          <h2>Populeritas Rendang</h2>
          <p>
            Dilansir dari berbagai sumber, tidak mengherankan jika kelezatan rendang dari Tanah Minang mampu menyebar hingga berbagai belahan dunia. 
            Rendang bahkan dinobatkan sebagai makanan terenak yang menduduki peringkat pertama dalam World's 50 Most Delicious Foods versi CNN International.
          </p>
          <img src={img1} alt="CNN Best Foods" />
        </div>
        <div className="image">
          <img src={img2} alt="Rendang Populer" />
        </div>
      </div> {/* Penutup untuk div container */}
      <Footer />
    </div>
  )
}

export default Populeritas