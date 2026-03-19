import React, {useState} from "react";

function TemplateCard({title,description,image}) {
  const [hover, setHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

return (
    <div style={{padding: "40px",borderRadius: "20px",padding:"40px",borderRadius:"20px",margin:"2px 20px 30px 20px",backgroundColor:hover?"#f1b5b8":"#E9C5C6",boxShadow:hover?"0 8px 16px rgba(0,0,0,0.2)":"0 4px 8px rgba(0,0,0,0.1)",transition:"all 0.3s ease",cursor:"pointer"}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <img src={image} alt={title} style={{ height: "200px", width: "230px",borderRadius:"10px"}}></img>
        <h4 style={{fontWeight:"bold"}}>{title}</h4>
        <p>{description}</p>
        <button style={{padding:"8px 15px",borderRadius:"8px",border:"none",backgroundColor:btnHover?"#ddd":"#fff",cursor:"pointer",transition:"background-color 0.3s ease"}} onMouseEnter={()=>setBtnHover(true)} onMouseLeave={()=>setBtnHover(false)}>Use Template</button>
    </div>
);
}
export default TemplateCard;