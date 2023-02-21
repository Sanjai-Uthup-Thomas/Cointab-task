import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './users.css'
import Pagination from './pagination'
import SearchBar from './searchBar';

function Users({ Pages }) {
  console.log(Pages);
  const pageNumber = Pages || 1; 
  const [users,setUsers]=useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);
  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);
      try{
        const {data}=await axios.get(`http://localhost:4000/api/getUsers?page=${page}`)
        const {users,pages}=data
        setUsers(users)
        setPages(pages)
        setLoading(false);
      }catch (error) {
        setLoading(false);
        setError("Some error occured");
      }
      
    } 
    fetchData()
  },[page]) 
  return (
    <>
    <SearchBar/>
    {pages===0?<div className='containerTable'>No data to show</div>:<>
    <div className='containerTable'>

   <table>
  <tbody>
    <tr >
      <td >Id</td>
      <td >Full Name</td>
      <td >Gender</td>
      <td >Email</td>
      <td >Phone</td>
      <td >Picture</td>
    </tr>
    {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (<> {users.map((data,key)=>{
        return( 
      <tr key={key} >
        <td >{data?.id}</td>
        <td >{data.Name}</td>
        <td >{data.Gender}</td>
        <td >{data.Email}</td>
        <td >{data.Phone}</td>
        <td ><img src={`${data.Picture}`} className='picture' alt='userImg'/></td>
      </tr>
        )})}</>)}
   </tbody>

   </table>
    </div>
<Pagination page={page} pages={pages} changePage={setPage} /></>}
    </>
    
  )
}

export default Users