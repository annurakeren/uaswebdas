import React from 'react'
import img from "./assets/gambar1.png"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="page-sejarah">
      <Navbar />
      <div className="container">
        <div className="text">
          <h2>Sejarah Rendang</h2>
          <p>Kata “Rendang” berasal dari bahasa Minangkabau, tepatnya “Randang”, yang mengacu pada teknik memasak yang disebut “Marandang”. 
            Ini melibatkan proses mengaduk makanan selama berjam-jam hingga dagingnya menjadi hitam dan dibalut dengan bumbu, 
            sering kali disebut sebagai “Dadak”. Akar sejarah asal usul rendang tertanam kokoh di masa lampau, 
            diperkirakan sejak era Kerajaan Pagaruyung (1347–1375 M) di bawah kepemimpinan Raja Adityawarman. 
            Bukti tertulis tertua tentang rendang ditemukan dalam naskah kuno Melayu yang berasal dari abad ke–19.</p>
          <p>Naskah ini menjelaskan proses memasak rendang dengan santan dan rempah-rempah, menghasilkan hidangan yang kaya rasa dan tahan lama. 
            Meskipun rendang memiliki akar Minangkabau yang kuat, beberapa ahli kuliner meyakini bahwa hidangan ini juga mendapat pengaruh dari 
            budaya Arab dan India. Hal ini tidak mengherankan, mengingat Minangkabau pada masa lampau merupakan jalur perdagangan 
            penting yang menghubungkan benua Asia dengan dunia Barat.</p>
        </div>
        <div className="image">
          <img src={img} alt="Rendang" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage