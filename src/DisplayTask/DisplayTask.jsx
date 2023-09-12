import React from "react";



const DisplayTask=(props)=>{



return(


<div style={{margin:5}} class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Taches</h5>
        
   </div>
   <div class="flow-root">
   {props.taskList.length>0? 
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        {props.taskList.map((data)=>(


            <li onClick={()=>props.updateObj(data)} class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {data.titre}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {data.type}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {data.confirm?<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>:null}
                    </div>
                </div>
            </li>






        ))}
            
            
         
          
     
        </ul>:<h2 style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>Aucune tache existante!</h2>}
   </div>
</div>





)


}


export default DisplayTask