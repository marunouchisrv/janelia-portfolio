import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../Data/main-graphic.json';


function Animation() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
        keepLastFrame: true,
    }

    

  return (
    <div>
               <Lottie
                options={defaultOptions}
                height={261}
                width={313}
                
               />
            </div>
  )
}

export default Animation;
