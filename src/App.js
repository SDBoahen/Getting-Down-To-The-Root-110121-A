import logo from './logo.svg';
import './App.css';


import { useEffect, useState } from "react"


import AddWooblyFORM from './component/forms/AddWooblyFORM.js';




function App() {


  //////// useStates
  
  const [wooblies, setWooblies] = useState(  [ ]  )
  console.log("STATE OF  wooblies :", wooblies)  //
  
  const [favWooblies, setFavWooblies] = useState(  [ ]  )
  console.log("STATE OF  favWooblies :", favWooblies)  //
  
  //////// useStates


  //////// Fetch Urls

  const WOOBLY_BASE_URL = "http://localhost:3000/wooblies"

  const PALS_BASE_URL = "http://localhost:3009/pals"

  //////// Fetch Urls


  useEffect( 
    
    ()=>{

      fetch(WOOBLY_BASE_URL)
      .then( r => r.json() )
      .then( 

        (fetchedWooblies)=>{
 

          setWooblies( fetchedWooblies ) // Setting All Wooblies

          
            let resultOfFilter = fetchedWooblies.filter( 

              (eachWoobly)=>{

                return(eachWoobly.favorties === true)


              } 

            )

          setFavWooblies(  [ ...resultOfFilter ]  ) // Setting Fav Wooblies

        }

       )
      // .then( console.log )

    } 
  
  
  
  , [] )




  //// js
  return (
    <div>


      <h1>Hey Y'all :)</h1> // Header1

      <br/><br/>
      <br/><br/>


      < AddWooblyFORM  
      
        //// variables
        WOOBLY_BASE_URL={WOOBLY_BASE_URL}

        //// functions

        //// data-flow
        wooblies={wooblies}
        setWooblies={setWooblies}

      />
      

      <br/><br/>
      <br/><br/>




      <h2>Woobly List</h2> // Header2
      {

        wooblies.map(

          (eachObj)=>{

            return(<div>
              <h3>{eachObj.name}</h3>
              {/* <img src={eachObj.imageURL} /> */}
            </div>)


          }
        )

      } 
      {/* < WooblyList /> */}
      <br/><br/>


      <h2>Fav Woobly List</h2> // Header2
      {

        favWooblies.map(

          (eachObj)=>{

            return(<h3>{eachObj.name}</h3>)


          }
        )

      }
      {/* < FavWoobliesList /> */}
      <br/><br/>




    </div>
  );


}
export default App;
