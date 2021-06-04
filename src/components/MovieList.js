import React, {useState} from 'react'
import Card from './Card'
import data from '../moviesData'
import AddModal from './AddModal'


    const MovieList=()=> {



    const [movies, setMovies]= useState(data)

    const [isOpen ,setIsOpen]= useState(false)

    const closeModal = ()=> setIsOpen(false)

    const addMovie= (newMovie) => setMovies ([...movies, newMovie ])

    return (
      <div>
           <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
            </nav>
      

     <button onClick= {()=>setIsOpen (true)}  > Add Movie</button>

     <AddModal isOpen={isOpen} closeModal={closeModal} addMovie={addMovie}/>

    
         
        <div style ={{display:"flex", flex: "wrap", justifyContent:" space-around"}}>

        {movies.map((el,i) =>(
        <Card key={i} movie={el}/>

        )
        )

        }
  

        </div>
        </div>
    )
}

 

export default MovieList