import React from 'react'

interface TV {
    [key: string]: any,
        TV:string,
    image:string,
    date:string,
    rate:number,
    available:boolean
}

let TVshow :TV[]=[]

let tv1=    {
    TV:"the 100",image:"./assets/the100.jpg",date:"20-2-2023",rate:3,available:true

}

let tv2 = {
    TV:"dexter",image:"./assets/dexter.jpg",date:"23-2-2023",rate:5,available:true

}

let tv3={
    TV:"snow pircer",image:"/assets/snowpircer.jfif",date:"6-1-2023",rate:2,available:false

}

let tv4={
    TV:"stranger things",image:"./assets/stranger_things.jpg",date:"15-12-2023",rate:2,available:false

}

TVshow.push(tv1)
TVshow.push(tv2)
TVshow.push(tv3)
TVshow.push(tv4)
function Tvshow() {
  return (
    <>
    <div className="container">
{

TVshow.map(tv =>  {
    let notAv="";
    if (!tv.available) {
        notAv = 'is will be available soon';
      }
    return (        
      <div className={'name'}>
        <div><h3> Name:{tv.TV}</h3> </div>
        <div>
          <img src={tv.image} 
         
          />
        </div>
        <p>
           Rated: {tv.rate}
        </p>
        <p>
           Date: {tv.date}
        </p>
        <p> it is available{tv.available}</p>
        {notAv}
      </div>       
    )
    
    })


    
}





    </div>
    </>
  )
}

export default Tvshow