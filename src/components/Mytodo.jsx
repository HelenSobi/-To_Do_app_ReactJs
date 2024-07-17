import { useState, useEffect } from 'react';
import {MdDelete} from 'react-icons/md';
import {AiOutlineToTop} from 'react-icons/ai';
import {AiFillEdit} from 'react-icons/ai';
import {MdOutlineAddTask} from 'react-icons/md';
import { MdMoreVert } from "react-icons/md";

function Mytodo() {
    const[input,setInput]=useState("");
    const[list,setList]=useState([]);
    const[show,setshow]=useState(true);
    const[btnid,setbtnid]=useState(-1);

    function visible(data){
        setshow(!show);
        setbtnid(data);
    }

    const inputfun=(event)=>{
      setInput(event.target.value);
    };

    const add =()=>{
        setList([...list,input]);
        setInput("");
    }
    const delete_task =(id)=>{
      const narr= list.filter((val,idx)=>{
        return id!=idx && val;
      });
      setList(narr);
        };
        
        
        const top=(id)=>{
            const narr=list.filter((x,idx)=>{
                return id!=idx && x;
            });
            setList([list[id], ...narr]);
        };

        const edit=(val)=>{
            console.log(val);
            setInput(val);
            const arr=list.filter((item)=> item!=val);
            setList(arr);
        }
        const [datess, setdatess] = useState(0);
        function dates(){
            const cd= new Date();
            const dd=cd.getDate();
            var mm=cd.getMonth();
            const arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
            const yy=cd.getFullYear();
            //console.log(cd.getDay())
            setdatess(arr[mm]+" "+dd+","+yy);
        }
      
    useEffect(() => {
      dates()
    }, []);
    //It is called every time any state if the dependency array is modified or updated .// date 
  return (
   
    <div className='flex-center'>
    <div className='container'>
        <div className='heading flex-center'>
        <h1 className='heading-h1'>{datess}</h1>
        </div>
        <div className="flex-center m-1">
        <input type="text" placeholder='      Add a new task ...' className='task' onChange={inputfun} value={input}></input>
        <button onClick={add} className="add_btn"><MdOutlineAddTask/></button>
        </div>
    

    <div>
        <ul>

        { list 
        && list.map((val,index)=> {
            return (
             <div className='listbox'>  
             
             <li className='list_style'>
             <div className="flexItem1">{val}</div>
             <div className='vis flexItem2' >
                <button className='del' onClick={()=>{delete_task(index)}} key={index} id={index}><MdDelete/></button>
            <button className='top' onClick={()=>{top(index);}}><AiOutlineToTop/></button>
            <button className='edit' onClick={()=>{edit(val);}}><AiFillEdit/></button></div>
          
            
            
            </li>
            </div>
    
             )}
             )} 
    </ul>
        </div>

        {/* <div>{
            list && list.map((x,index)=>{
                return(<div className='list' key={index} onclick={()=>{top(index);}}>{x}</div>);
            })
            }

        </div> */}
     </div> 
    </div>
    );
}    


export default Mytodo
// { list 
//     && list.map((val,index)=> {
//         return (
//          <div className='listbox'>  
         
//          <li className='list_style'onClick ={()=>visible(index)}>
//             {(show && btnid==index) ?<div className='vis'>
//             <button className='del' onClick={()=>{delete_task(index)}} key={index} id={index}><MdDelete color='red'/></button>
//         <button className='top' onClick={()=>{top(index);}}><AiOutlineToTop/></button>
//         <button className='edit' onClick={()=>{edit(val);}}><AiFillEdit/></button></div>:<div className='invisible'></div>}
//         {val}
        
//         </li>
//         </div>

//          )}
//          )} 