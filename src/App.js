import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MenuSection from './components/MenuSection';
import VideoSection from './components/VideoSection';

function App() {

  useEffect(() => {
    axios.get('/youtudrive-react/videoData.json')
    .then(response => setVideo(response.data))
    .catch(error => console.error('Error loading data:', error));
    }, []);

  const [video, setVideo] = useState([]);
  const [type, setType] = useState("ger");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobielMenuButton, setMobielMenuButton] = useState(<span>&#9776;</span>);

  const handleclick = (e) =>{
    setType(e.target.id);
    document.querySelector(".mobileMenu").style = "height: 70px";
    setMobielMenuButton(<span>&#9776;</span>);
    setMobileMenu(false);
  }

  const mobileMenuHandle = () =>{
    setMobileMenu(!mobileMenu);
    if(mobileMenu){
      setMobielMenuButton(<span>&#9776;</span>);
      document.querySelector(".mobileMenu").style = "height: 70px";
    }
    else{
      setMobielMenuButton(<span>&#10005;</span>);
      document.querySelector(".mobileMenu").style = "height: 100%";
    }
  }

  return (
    <div className="main">
      <MenuSection handleclick={handleclick} mobileMenuHandle={mobileMenuHandle} mobielMenuButton={mobielMenuButton} type={type}/>
      <VideoSection video={video} type={type}/>
    </div>
  );
}

export default App;
