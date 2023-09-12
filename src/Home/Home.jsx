import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import './Home.css'
import DisplayTask from "../DisplayTask/DisplayTask";
import ShowDetaills from "../ShowDetaills/ShowDetaills";

const Home=()=>{
////////////////////////state///////////////////////////
const [taskList,setTaskList]=useState([]);
const [obj,setObj]=useState(null)

const updateObj=(param)=>{


  setObj(param)


}


return(

<section>


<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gtask</span>
    </a>
  
   
  </div>
</nav>

<div className="ALL" > 

<DisplayTask updateObj={updateObj} taskList={taskList} setTaskList={setTaskList} />
{obj!=null? <ShowDetaills obj={obj} updateObj={updateObj} taskList={taskList} setTaskList={setTaskList}/>:null}
<AddTask taskList={taskList} setTaskList={setTaskList} />


</div>

    
</section>



)


}


export default Home