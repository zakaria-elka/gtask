import React,{useState} from "react";



const AddTask=(props)=>{

    const [task,setTask]=useState({

        titre:"",
        type:"",
        desc:"",
        date:new Date(),
        confirm:false,
    
    });


    const saveTask=()=>{


    props.setTaskList([...props.taskList,task])
    setTask({

        titre:"",
        type:"",
        desc:"",
        date:new Date(),
        confirm:false,
    
    })

    }


return(


<div style={{margin:5}} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Ajouter une Tache</h5>
        <div>
            <label for="titre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
            <input value={task.titre} onChange={(e)=>setTask({...task,titre:e.target.value} )} type="text" name="titre" id="titre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="entrer titre" required />
        </div>
        <div>
            <label for="Date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type de Tache</label>
            <select value={task.type} onChange={(e)=>setTask({...task,type:e.target.value})} id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choisir type</option>
  <option value="important">important</option>
  <option value="peu important">peu important</option>
 
</select>




        </div>
        <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea value={task.desc} onChange={(e)=>setTask({...task,desc:e.target.value})} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description..."></textarea>


        </div>
      
        <button onClick={()=>saveTask()} type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter</button>
     
    </form>
</div>



)

}


export default AddTask