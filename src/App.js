
import './App.css';
import Auth from './components/auth'
import {db,auth} from './config/firebase'
import {useEffect, useState} from 'react' ;
import {getDocs,collection,addDoc,deleteDoc,doc,updateDoc} from 'firebase/firestore'

const App=()=>{

    const [movieList,setMovieList]=useState([]) ;

    const moviesCollectionRef=collection(db,"movies") ;

////////////////
//create New movie 
  const [newMovieTitle,setNewMovieTitle]=useState("") ;
  const [newReleaseDate,setNewReleaseDate]=useState(0) ;
  const [isNewMovieOscar,setIsNewMovieOscar]=useState(false) ;

  ///////
  const [updatedTitle,setUpdatedTitle]=useState("");
    

  const getMovieList=async ()=>
    {
       try {const data = await getDocs(moviesCollectionRef) ;
           console.log(data) ;
           const filteredData=data.docs.map((doc)=>({
               ...doc.data(),
               id:doc.id
           }))
           console.log(filteredData) ;
           setMovieList(filteredData) ;
       }
       catch (error){console.log(error.message)}
       
    } ;  

    const deleteMovie=async (id)=>{
        const movieDoc=doc(db,"movies",id) ;

        try {
            await deleteDoc(movieDoc);
            getMovieList() ;

        }
        catch(err){
            console.error(err) ;
        }
    }

    const updateMovieTitle=async (id)=>{
        const movieDoc=doc(db,"movies",id) ;
 
        try {
            await updateDoc(movieDoc,{title:updatedTitle});
            getMovieList() ;

        }
        catch(err){
            console.error(err) ;
        }
    }
  useEffect(()=>
        { 
           
                 getMovieList() ;
       },[]) ;

       const onSubmitMovie= async ()=>{
        try {
   
        await addDoc(moviesCollectionRef,{title:newMovieTitle,
                                         releaseDate:newReleaseDate,
                                         Oscar:isNewMovieOscar,
                                         userId:auth?.currentUser?.uid,}) ;
        console.log('done')
        getMovieList() ;
        }
        catch (err){
            console.error(err );
        }

       
    }
    return (
        <div>
           <Auth />
           <div>
             <input placeholder='Movie title..' onChange={(e)=>setNewMovieTitle(e.target.value)}/>
             <input placeholder='Release Date...' type='number' onChange={(e)=>setNewReleaseDate(Number(e.target.value))}/>
             <input type='checkbox' checked={isNewMovieOscar} onChange={(e)=>setIsNewMovieOscar(e.target.checked)}/>
             <label> recive Oscar</label>
             <button onClick={onSubmitMovie}> submit movie</button>
           </div>
           <div>
            {movieList.map((movie)=>(
                <div>
                <h1 style={{color: movie.Oscar  ?"green":"red"}}>{movie.title}</h1>
                <p>Date:{movie.releaseDate}</p>
                
                <button onClick={()=>deleteMovie(movie.id)}>Delete Movie</button>
                <input placeholder='new title...' onChange={(e)=>setUpdatedTitle(e.target.value)} />
                <button onClick={()=>updateMovieTitle(movie.id)}>update Title of movie</button>
                </div> 
            ))}
           </div>
        </div>
    )
}

export default App ;