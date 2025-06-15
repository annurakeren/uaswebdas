import React, { useState } from 'react'
import '../App.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Load semua gambar di assets
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

// Fungsi ambil URL gambar dari nama file
const getImageUrl = (fileName) => {
  const found = Object.entries(images).find(([path]) =>
    path.includes(fileName)
  );
  return found ? found[1].default : '';
};

const Olahan = () => {
  // State awal gambar, judul, dan deskripsi
  const [currentImage, setCurrentImage] = useState(getImageUrl('spagetirendang.jpg'));
  const [currentTitle, setCurrentTitle] = useState('Spageti Rendang');
  const [currentDesc, setCurrentDesc] = useState('Rendang dengan sentuhan Italia: perpaduan cita rasa Minang dan spageti yang menggoda selera.');

  // Fungsi saat hover gambar kecil
  const ubahGambar = (file, judul) => {
    setCurrentImage(getImageUrl(file));
    setCurrentTitle(judul);
    setCurrentDesc(`Ini adalah olahan ${judul.toLowerCase()} dengan perpaduan rasa khas rendang.`);
  };

  return (
    <div className="page-olahan">
      <Navbar />
      <div className="container">
        <div className="menu-gambar">
          <h2>Olahan Rendang</h2>
          <div className="grid-gambar">

            <a href="https://www.taysbakers.com/menu-unik-rendang-yang-harus-kamu-coba/" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('spagetirendang.jpg')}
                alt="Spageti Rendang"
                onMouseOver={() => ubahGambar('spagetirendang.jpg', 'Spageti Rendang')}
              />
            </a>

            <a href="https://travel.kompas.com/read/2018/04/04/182700027/dari-burger-hingga-sushi-ini-5-kreasi-makanan-rendang-kekinian?page=all" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('rotigorengrendang.jpg')}
                alt="Roti Goreng Rendang"
                onMouseOver={() => ubahGambar('rotigorengrendang.jpg', 'Roti Goreng Rendang')}
              />
            </a>

            <a href="https://www.taysbakers.com/menu-unik-rendang-yang-harus-kamu-coba/" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('keripikrendang.jpg')}
                alt="Keripik Rendang"
                onMouseOver={() => ubahGambar('keripikrendang.jpg', 'Keripik Rendang')}
              />
            </a>

            <a href="https://www.taysbakers.com/menu-unik-rendang-yang-harus-kamu-coba/" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('pizzarendang.jpg')}
                alt="Pizza Rendang"
                onMouseOver={() => ubahGambar('pizzarendang.jpg', 'Pizza Rendang')}
              />
            </a>

            <a href="https://dietpartner.id/rendang-tak-hanya-daging-ini-5-jenis-rendang-unik-khas-minang-yang-wajib-dicoba/" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('kaliojariangrendang.png')}
                alt="Kalio Jariang Rendang"
                onMouseOver={() => ubahGambar('kaliojariangrendang.png', 'Kalio Jariang Rendang')}
              />
            </a>

            <a href="https://pergikuliner.com/blog/cek-enaknya-5-kreasi-olahan-rendang-yang-tidak-membosankan" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('martabakrendang.jpeg')}
                alt="Martabak Rendang"
                onMouseOver={() => ubahGambar('martabakrendang.jpeg', 'Martabak Rendang')}
              />
            </a>

            <a href="https://pergikuliner.com/blog/cek-enaknya-5-kreasi-olahan-rendang-yang-tidak-membosankan" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('nasigorengrendang.jpg')}
                alt="Nasi Goreng Rendang"
                onMouseOver={() => ubahGambar('nasigorengrendang.jpg', 'Nasi Goreng Rendang')}
              />
            </a>

            <a href="https://pergikuliner.com/blog/cek-enaknya-5-kreasi-olahan-rendang-yang-tidak-membosankan" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('susirendang.jpg')}
                alt="Sushi Rendang"
                onMouseOver={() => ubahGambar('susirendang.jpg', 'Sushi Rendang')}
              />
            </a>

            <a href="https://www.finnafood.com/blog/resep-rendang-telur-praktis/" target="_blank" rel="noopener noreferrer">
              <img 
                src={getImageUrl('telurrendang.jpg')}
                alt="Telur Rendang"
                onMouseOver={() => ubahGambar('telurrendang.jpg', 'Telur Rendang')}
              />
            </a>

          </div>
        </div>

        <div className="gambar-besar">
          <img id="gambarUtama" src={currentImage} alt="Tampilan Besar" />
          <div className="overlay">
            <h3 id="judulOverlay">{currentTitle}</h3>
            <p id="deskripsiOverlay">{currentDesc}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Olahan;
