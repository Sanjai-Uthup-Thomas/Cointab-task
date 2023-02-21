import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './buttons.css';

function Buttons() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); 
    const [loading1, setLoading1] = useState(false);

    const FetchUsers = async () => {
        console.log(loading);
        setLoading(true)
        console.log(loading);
        if (loading) {
            console.log(loading);
            console.log("hai");
            alert('Data is already being fetched. Please wait for it to complete.');
            return;
        }
        try {
            console.log(loading);
            await axios.post('http://localhost:4000/api/addUsers')
            setLoading(false)
        } catch (err) {
            console.log(loading);
            console.log(err);
            setLoading(false)
            console.log(loading);

        }
    }
    const DeleteUsers = async () => {
        setLoading1(true)
        if (loading1) {
            alert('Already, data is being deleted. Please give it some time to finish.');
            return;
        }
        try {
            await axios.delete('http://localhost:4000/api/deleteUsers')
            setLoading1(false)
        } catch (err) {
            console.log(err);
            setLoading1(false)
        }
    }
    const UserDetails = () => {
        navigate(`/UserDetailPage`);
    }
    return (
        <>
            <div className="container">
                <button className="my-button1" onClick={() => FetchUsers()}>Fetch Users</button>
                <button className="my-button2" onClick={() => DeleteUsers()} >Delete Users</button>
                <button className="my-button1" onClick={() => UserDetails()}>User Details</button>
            </div>
        </>
    )
}

export default Buttons