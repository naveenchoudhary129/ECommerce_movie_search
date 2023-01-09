import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';
const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    <div>
      <section className='movie-page'>
        <div className='grid grid-4-col'> {movie.map((curMovie) => {
          const {imdbID , Title , Poster} = curMovie ;
          return (
            <NavLink to={`movies/${imdbID}`} key={imdbID}>
              <div className='mycard'>
                <div className='card moviecard'>
                  <div className='card-info'>
                    <h2 style={{color:"gray" , fontSize:"21px"}}>{Title}</h2>
                    <div style={{color:"black" , fontSize:"20px"}}>
                    <img src={Poster} alt={imdbID} />
                    favorite
                    <i class="material-icons" style={{color:"red" , marginTop:"20px"}}>favorite</i>
                    </div>
                  </div>
                </div>
              </div>
              
            </NavLink>
          )
        })} 
        </div>
      </section>
    </div>
  )
}

export default Movies