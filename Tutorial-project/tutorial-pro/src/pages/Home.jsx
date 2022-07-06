import Addtutorial from "../component/Addtutorial";
import Tutorial from "../component/Tutorial";
import axios from "axios";
import {useState} from 'react';
import { useEffect } from "react";

const Home = () => {
    
    const [tutorials, setTutorial] = useState();
    
    const url = 'https://cw-axios-example.herokuapp.com/api/tutorials';
   
    //! read işlemi 
    const getTutorial = async () => {
        try {
        const { data } = await axios.get(url);
        setTutorial(data);
            
        } catch (error) {
         console.log(error)
        }
    };
    
    //? component mount işlemi 
    useEffect(() => {
        getTutorial();
    }, []);

    console.log(tutorials);

    //! Create işlemi 

    const addTutorial = async (tutorial) => {
        try {
         await axios.post(url, tutorial);
        } catch (error) {
           console.log(error) 
        }
        getTutorial();
    };

    //! DELETE
    const deleteTutorial = async (id) => {
       try {
         await axios.delete(`${url}/${id}`);
       } catch (error) {
         console.log(error)
       }
       getTutorial();
    };

    //!EDİT PART (PUT FUNCTİON)

    const editTutorial = async (id, title,desc) =>{
        try {
            await axios.put(`${url}/${id}`, {title, description: desc});
        } catch (error) {
           console.log(error) 
        }
        getTutorial();
    };
    
    
    
    
    
    return(
        <>
        <Addtutorial addTutorial={addTutorial}/>
        
        <Tutorial 
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}/>
        
        </>
    )
}

export default Home;