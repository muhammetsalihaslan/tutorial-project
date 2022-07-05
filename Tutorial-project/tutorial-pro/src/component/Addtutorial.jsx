

const Addtutorial = () => {
    return(
    <div className="container text-center mt-4">
    <h1 className="text-danger">ADD YOUR TUTORIAL</h1>
    <form className="mt-4" >
    <div className="form-group">
    <label for="title">Title</label>
    <input type="text" className="form-control mt-2" id="title"  placeholder="Enter Title"/>
    </div>
    <div className="form-group mt-4">
    <label for="description">Description</label>
    <input type="text" className="form-control mt-2" id="description" placeholder="Description"/>
    </div>
    <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
    </div>
    )
}

export default Addtutorial;