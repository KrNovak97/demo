import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

export default function Component1() {

    const [ZoomImage, setZoomImage] = useState(false);
    
    return (
      
      <div className="flex justify-center cursor-pointer">
      <Image src="/vercel.svg" alt="Image" width={500} height={500} onClick={() => setZoomImage(!ZoomImage)}/>
      
      {
        ZoomImage && (
         <div>
            <Image src="/vercel.svg"
            className="fixed top-0 left-0 w-max h-max z-50 flex items-center justify-center bg-black
            "
            alt="Image" height={500} width={500}
            onClick={setZoomImage(false)}
        
            >
  
  
           </Image>
          </div>
        ) 
        
      }
    </div>
  )
}
