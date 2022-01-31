import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


export const transformTime = (timeSpent) => {
  return `${Math.floor(timeSpent / 60)}H ${timeSpent % 60}min`
}


export default function Activity({ activity, order, username, date, parentFunc }) {

  const navigate = useNavigate();

  async function deleteItem(id) {
    await axios.delete(`http://localhost:8000/api/userActivities/${username}/${date}/${id}`);
    parentFunc();
  }



  return (<tr>
    <td>  {activity.code}</td>
    <td>{transformTime(activity.time)}</td>
    <td>{activity.description}</td>
    <td>
      <button className='activity-button'>Edit</button>
      <button onClick={() => { deleteItem(order) }} className='activity-button'>Delete</button>
      <button className='activity-button'>Details</button>
    </td>





  </tr>);
}
