function CardComponent(props){

    // props = {  
    //  personObj={samObj} 
    //  personFavColor={"Gold"}  
    // }


    //// js

        console.log("props: ", props)
        console.log("props.personObj: ", props.personObj)

    //// js



    return(<div>

        <h3>{props.personObj.name}</h3>
        <img src={props.personObj.image} />

        <h4>Favorite Color: {props.personFavColor}</h4>

    </div>)


}
export default CardComponent