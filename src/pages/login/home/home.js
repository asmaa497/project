import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {NextPage} from "../../../store/action";
const Home = () => {
    const lang=useSelector((state)=>state.lang)
    const disbatch=useDispatch();
    const handleChange=()=>{
      disbatch(NextPage("ar"));
    }
      return (
        <>
         <h1>My Home page</h1>
         <h2>Num of Clicks : {lang}</h2>
         <button className="btn btn-success" onClick={()=>handleChange()}>
           Click Me
         </button>
        </>
      );
    };
    
    export default Home;