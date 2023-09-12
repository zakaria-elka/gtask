import React from "react";


const ShowDetaills=(props)=>{


 const deleteitem=(param)=>{

    const updatedItems = props.taskList.filter((item) =>  item.titre!== param);
    
    
    props.setTaskList(updatedItems);
    props.updateObj(null)

 }   

const confirme=(param)=>{


    props.taskList.filter((item) =>  item.titre== param)[0].confirm=true;
    props.setTaskList(props.taskList);  

} 



return(


    <div style={{margin:5}} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Detaills</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-5xl font-extrabold tracking-tight">{props.obj.titre}</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3 items-center">
                
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.obj.type}</span>
            </li>
            <li class="flex space-x-3 items-center">
                
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.obj.date.toLocaleDateString("fr")}</span>
            </li>
           
        </ul>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea value={props.obj.desc} style={{pointerEvents:"none",height:200}} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description..."></textarea>

<div>
        <button onClick={()=>confirme(props.obj.titre)} style={{margin:10}} type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5  justify-center w-20 text-center">
        <svg class="flex-shrink-0 w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
        </button>
        <button onClick={()=>deleteitem(props.obj.titre)} style={{margin:10}} type="button" class="text-white bg-red-950 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5  justify-center w-20 text-center">
        <svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
  </svg>
        </button>
</div>  

    </div>



)

}


export default ShowDetaills