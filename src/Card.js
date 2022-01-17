import React from "react";
import 'tachyons';

function Card({id,name,email}){
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5' >
        <img src={`https://robohash.org/${id}`} alt="profile_img_roboproject"/>
        <div>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
        </div>
    </div>
    )
}
export default Card;