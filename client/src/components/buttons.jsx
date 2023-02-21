import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './buttons.css';

function Buttons() {
    const navigate = useNavigate();
    const FetchUsers=async()=>{
        try{
            await axios.post('http://localhost:4000/api/addUsers')
        }catch(err){
            console.log(err);
        }
    }
    const DeleteUsers=async()=>{
        try{
            await axios.delete('http://localhost:4000/api/deleteUsers')
        }catch(err){
            console.log(err);
        }
    }
    const UserDetails=()=>{
        navigate('/UserDetailPage');
    }
    return (
        <>
            <div className="container">
                <button className="my-button1" onClick={() =>FetchUsers() }>Fetch Users</button>
                <button className="my-button2" onClick={() => DeleteUsers()}>Delete Users</button>
                <button className="my-button1" onClick={() => UserDetails()}>User Details</button>
            </div>
        </>
    )
}

export default Buttons