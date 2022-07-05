import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';



const Tutorial = () => {
    return(
    <div className="container text-center mt-5">

    <table class="table table-striped">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
       <BiEdit
       data-bs-toggle="modal"
       data-bs-target="#edit-modal"
       size={20}
       className="text-primary me-1 cursor-pointer"
       />
       <AiFillDelete
       size={22}
       className="text-danger cursor-pointer"/>
       </td>
    </tr>
     </tbody>
    </table> 

    </div>
    )
}

export default Tutorial;