import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Memasak = () => {
    return (
        <div className='page-memasak'>
            <Navbar />
             <div className="container">
        <div className="content">
          <h2>Cara Memasak Rendang</h2>

          <details>
            <summary>Bahan Bahan</summary>
            <ul>
              <li>1 kg daging sapi</li>
              <li>1 liter santan dari 2 butir kelapa</li>
              <li>10 siung bawang merah</li>
              <li>5 siung bawang putih</li>
              <li>5 buah cabai merah besar</li>
              <li>2 cm jahe, lengkuas, dan kunyit</li>
              <li>2 batang serai</li>
              <li>3 lembar daun jeruk dan daun salam</li>
              <li>Garam dan gula secukupnya</li>
            </ul>
          </details>

          <details>
            <summary>Alat</summary>
            <ul>
              <li>Wajan besar</li>
              <li>Kompor</li>
              <li>Blender atau ulekan</li>
              <li>Sendok kayu untuk mengaduk</li>
            </ul>
          </details>

          <details>
            <summary>Langkah memasak</summary>
            <ol>
              <li>Haluskan bumbu-bumbu dan tumis hingga harum.</li>
              <li>Masukkan daging, aduk hingga meresap.</li>
              <li>Tambahkan santan, aduk perlahan.</li>
              <li>Masak dengan api kecil hingga santan menyusut.</li>
              <li>Terus aduk hingga daging berwarna gelap dan berminyak.</li>
            </ol>
          </details>
        </div>

        <div className="video">
          <iframe 
            src="https://www.youtube.com/embed/GNfRXKsvG04" 
            title="Cara Memasak Rendang" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

            <Footer />
        </div>
    )
}

export default Memasak