import { useState } from 'react';

const Addtutorial = ({addTutorial}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
       addTutorial({title: title, description: desc});
       setTitle("");
       setDesc("");
    }


    return(
    <div className="container text-center mt-4">
    <h1 className="text-danger">ADD YOUR TUTORIAL</h1>
    <form className="mt-4" onSubmit={handleSubmit} >
    <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" 
    className="form-control mt-2" 
    id="title"  
    placeholder="Enter Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)} 
    required/>
    </div>
    <div className="form-group mt-4">
    <label htmlFor="description">Description</label>
    <input 
    type="text" 
    className="form-control mt-2" 
    id="description" 
    placeholder="Description"
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    required/>
    </div>
    <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
    </div>
    );
};

export default Addtutorial;