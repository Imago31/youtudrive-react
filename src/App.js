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

  const handleclick = (e) =>{
    console.log(e.target.id)
    setType(e.target.id)
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
                <span className="openMenu closed">&#9776;</span>
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
           item.type == type && <iframe key={index} className="yutu"  src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
