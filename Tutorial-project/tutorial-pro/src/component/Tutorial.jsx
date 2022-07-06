import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import EditTutorial from './EditTutorial';
import { useState } from 'react';


const Tutorial = ({tutorials, deleteTutorial, editTutorial}) => {
    const[editItem, setEditItem] = useState("");
    
    
    
    return(
    <div className="container text-center mt-5">

    <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Edit
       </th>
    </tr>
    </thead>
     <tbody>
        {tutorials?.map((item)=>{
            const {id, title, description} = item;
            return ( 
      <tr key={id}>
      <th>{id}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td className="text-center text-nowrap"> 
       <BiEdit
       data-bs-toggle="modal"
       data-bs-target="#edit-modal"
       size={20}
       className="text-primary me-1 cursor-pointer"
       onClick={() => setEditItem(item)}
       />
       <AiFillDelete
       size={22}
       className="text-danger cursor-pointer"
       onClick={() => deleteTutorial(id)}/>
       </td>
       </tr>
        );
        })}
   
     </tbody>
    </table> 

    <EditTutorial editTutorial={editTutorial} editItem={editItem}/>

    </div>
    )
}

export default Tutorial;