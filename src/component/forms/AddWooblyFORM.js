import { useState } from "react"




function AddWooblyFORM( {  WOOBLY_BASE_URL ,   wooblies, setWooblies  } ){


    const [wooblyName, updateWooblyName] = useState( "" )
    console.log("STATE OF  wooblyName: ", wooblyName)  //
  
    const [wooblyImage, updateWooblyImage] = useState( "" )
    console.log("STATE OF  wooblyImage: ", wooblyImage)  //
  
  
    const [newWoobly, setNewBoobly] = useState( 
      {
  
        name: wooblyName,
        imageURL: wooblyImage
  
      }
    )
    console.log("STATE OF  newWoobly: ", newWoobly)  //




    return(<>
    
    <form  // form.addEventListener( "submit" , (e)=>{ e.preventDefault } )

        onSubmit={ 
          
          ( synthEvent )=>{ synthEvent.preventDefault()

            let newWooblyObj ={

              name: wooblyName,
              imageURL: wooblyImage

            } 
            
            fetch(WOOBLY_BASE_URL , 
              
              { 
        
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify( newWooblyObj )
            
              } 
            
            )
            .then( r => r.json() )
            .then( console.log )


            setWooblies( [ newWooblyObj , ...wooblies ]  )
            updateWooblyName( "" )
            updateWooblyImage( "" )

        
          }  
      
        }
      
      >
        <label>Name: </label >
        <input 
        
          onChange={    // input.addEventListener( "onchange" , (e)=>{ console.log(e.target) } )

            ( synthEvent )=>{  

              console.log("synthEvent.target.value: ", synthEvent.target.value)  //
              updateWooblyName( synthEvent.target.value )
            
            }  

          }

          value={wooblyName} 
          placeholder="Woobly Name :)"
        
        />
        <br/><br/>
        <label>Image URL: </label >
        <input 
        
          onChange={

            ( synthEvent )=>{  

              console.log("synthEvent.target.value: ", synthEvent.target.value)  //
              updateWooblyImage( synthEvent.target.value )
            
            }  

          }

          value={wooblyImage} 
          placeholder="Woobly Image :)"
        
        />
        <br/><br/>

        <input type="submit"/>
        <button type="submit">GO</button>

      </form>
    </>)

}
export default AddWooblyFORM