import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {useState} from 'react';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

 

  function AddModal({isOpen, closeModal, addMovie }){

    const[name, setName] = useState('')

    const[story, setStory ]= useState ('')

    const[year, setYear ]= useState ('null')

    const[image, setImage ]= useState ('')

    const[rating, setRating ]= useState ('0')


    
  

    return ( 
    <div>
    
      <Modal

   
       
     isOpen={isOpen}
         
          style={customStyles}
          contentLabel="Example Modal"
        >
 
<form onSubmit ={(e)=> {

e.preventDefault();
addMovie()
addMovie({name,story,image,rating,year})

}} >

 <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Movie Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setName(e.target.value)} aria-describedby="emailHelp"/>
    </div>


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Story</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setStory(e.target.value)} aria-describedby="emailHelp"/>
    </div>


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">rating</label>
    <input type="number" class="form-control" id="exampleInputEmail1" onChange={(e)=>setYear(e.target.value)} aria-describedby="emailHelp"/>
    </div>
     

    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Poster Url</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setImage(e.target.value)} aria-describedby="emailHelp"/>
    </div>

    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Year</label>
    <input type="number" min="1920" max="2021" class="form-control" id="exampleInputEmail1" onChange={(e)=>setYear(e.target.value)}aria-describedby="emailHelp"/>
    </div>
   
    <button type= " submit" class="btn btn-primary">Submit </button>
     </form>
   
    <button onClick={closeModal}>close</button>
  </Modal>
  </div>
  
    );
}
export default AddModal 