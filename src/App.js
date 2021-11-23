import logo from './logo.svg';
import './App.css';

import CardComponent from "./component/cardComponent.js"



function App() {


  //// js

  let samObj ={

    name: "Sam",
    image: "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512"

  }
  let notSamObj ={

    name: "NotSam",
    image: "https://pbs.twimg.com/profile_images/1441801943916101634/3U5S-guY_400x400.jpg"

  }



  //// js


  return (
    <div>

      <CardComponent personObj={samObj} personFavColor={"Gold"} />

      <CardComponent personObj={notSamObj} personFavColor={"Magenta"}/>


      {/* <CardComponent WHATYOUWANTTOCALLITONARRIVAL={INCURRENTSCOPE} /> */}

      {/* CardComponent(samObj) */}

    </div>
  );


}

export default App;
