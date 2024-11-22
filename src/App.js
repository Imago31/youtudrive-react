import { useState } from 'react'
import './App.css'

function App() {

  const videoData =[
    {"video":"https://www.youtube.com/embed/GMvK6DD4MK4","type":"ger"},
    {"video":"https://www.youtube.com/embed/fA6dEDNSd1Y","type":"ger"},
    {"video":"https://www.youtube.com/embed/_e5mIqafwMA","type":"en"},
    {"video":"https://www.youtube.com/embed/f2a_w-uRO0w","type":"en"},
    {"video":"https://www.youtube.com/embed/d51odNqkwlQ","type":"ru"},
    {"video":"https://www.youtube.com/embed/A5dBAUuZYqM","type":"ru"},
    {"video":"https://www.youtube.com/embed/G8Lp91VkI0Q","type":"car"},
    {"video":"https://www.youtube.com/embed/b8WbQFZicU0","type":"car"},
  ]

  const [vido] = useState(videoData);
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
      <div className="menuSection">
        <div className="desktopMenu">
          <h1 className="title">YouTuDrive</h1>
            <div className="menu">
              <button id='ger' onClick={handleclick} className="menuButton" style={type=="ger" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>German</button>
              <button id='en' onClick={handleclick} className="menuButton" style={type=="en" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>English</button>
              <button id='ru' onClick={handleclick} className="menuButton" style={type=="ru" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>Russian</button>
              <button id='car' onClick={handleclick} className="menuButton" style={type=="car" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>Cars</button>
            </div>
        </div>
        <div className="mobileMenu">
                <p className="openMenu" onClick={mobileMenuHandle}>{mobielMenuButton}</p>
                <h1 className="title">YouTuDrive</h1>
                <div className="menu">
                  <button id='ger' onClick={handleclick} className="menuButton" style={type=="ger" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>German</button>
                  <button id='en' onClick={handleclick} className="menuButton" style={type=="en" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>English</button>
                  <button id='ru' onClick={handleclick} className="menuButton" style={type=="ru" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>Russian</button>
                  <button id='car' onClick={handleclick} className="menuButton" style={type=="car" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>Cars</button>
                </div>
            </div>
        <div className="videoSection">
          {
          videoData.map((item, index) =>(
           item.type == type && <iframe key={index} src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
