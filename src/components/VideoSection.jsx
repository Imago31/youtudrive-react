function VideoSection(props) {

    return (
        <div className="videoSection">
          {
          props.video.map((item, index) =>(
           item.type == props.type && <iframe key={index} src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          ))
          }
        </div>
    );
}  
  
export default VideoSection;
  