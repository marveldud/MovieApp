import React from 'react'
import { useEffect } from 'react'
import MovieBox from './MovieBox'
import axios from 'axios';
import Pager from './Pager';
import { useState } from 'react';




const Home = () => {
   
const [list ,setList] = useState();
const [page , setPage] = useState(1);

useEffect(()=>{
   axios
   .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=531c8779023f70f5ec45da60cc337e58&language=en-US&page=${page}`)
   .then(({data}) => setList(data.results))
   .catch((err) =>console.log(err))
},[page])
         
    

  return (
    <div>
   
   <Pager page={page} setPage={setPage} />
 
            <div className="container">
                <div className="grid">
                   {
                    list && list.map((movie) => <MovieBox  list={movie} />                     
                    )
                   }
                </div>
                <Pager page={page} setPage={setPage} />
            </div>


    </div>
  )
}

export default Home
