function MenuSection({handleclick,mobileMenuHandle,mobielMenuButton,type}) {

  return (
      <div className="menuSection">
        <div className="desktopMenu">
          <h1 className="title">YouTuDrive</h1>
            <div className="menu">
              <button id='ger' onClick={handleclick} className="menuButton" style={type=="ger" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>German</button>
              <button id='en' onClick={handleclick} className="menuButton" style={type=="en" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>English</button>
              <button id='ru' onClick={handleclick} className="menuButton" style={type=="ru" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>Russian</button>
              <button id='car' onClick={handleclick} className="menuButton" style={type=="car" ? {color:"red",border: "2px solid red"} : {color:"orange",border: "2px solid orange"}}>Cars</button>
              <a className="words" href="/words.pdf" download="words.pdf">Download words</a>
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
            <a className="words" href="/words.pdf" download="words.pdf">Download words</a>
          </div>
        </div>
      </div>
  );
}  

export default MenuSection;
