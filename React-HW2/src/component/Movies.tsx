import React from 'react'

interface Movies {
    [key: string]: any,
        Movie:string,
    image:string,
    date:string,
    rate:number,
    available:boolean
}

let M :Movies[]=[]

let movie1=    {
    Movie:"smile",image:"./assets/smile.jpg",date:"20-2-2023",rate:3,available:true

}

let movie2 = {
    Movie:"baby lon",image:"./assets/babylon.jpg",date:"23-2-2023",rate:5,available:true

}

let movie3={
    Movie:"Chaos Walking",image:"/assets/Chaos_Walking.jpg",date:"6-1-2023",rate:2,available:false

}

let movie4={
    Movie:"avatar",image:"./assets/avatar.jpg",date:"15-12-2023",rate:2,available:false

}

M.push(movie1)
M.push(movie2)
M.push(movie3)
M.push(movie4)


function Movies() {
  return (
<>
    <div className="container">
{

M.map(movie =>  {
    let notAv="";
    if (!movie.available) {
        notAv = 'is will be available soon';
      }
    return (        
      <div className={'name'}>
        <div><h3> Name:{movie.Movie}</h3> </div>
        <div>
          <img src={movie.image} 
         
          />
        </div>
        <p>
         Rated:   {movie.rate}
        </p>
        <p>
           Date {movie.date}
        </p>
        <p> it is available{movie.available}</p>
        {notAv}
      </div>       
    )
    
    })


    
}





    </div>
    </>
  )
}



        


export default Movies