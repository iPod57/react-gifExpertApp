import React from 'react'

export const GifGridImagen = ({id,url,title}) => {
    //console.log(title,id,url);
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    ) 
}
