import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Activity from './Activity';
import DatePicker from "react-datepicker";
import Nav from './Nav';
import { ReactSession } from 'react-client-session';
import { v4 } from 'uuid';




export default function MyActivities() {

  const [data, setData] = useState({ entries: [] });
  const [selectedDate, setDate] = useState(new Date());

  const username = ReactSession.get("user");

  let fetchData = React.useCallback(async () => {

    const result = await axios(
      `http://localhost:8000/api/userActivities/${username}/${formatDate(selectedDate)}`,
    );
    setData(result.data);
  }, [selectedDate, username])

  useEffect(() => {
    fetchData();
  }, [fetchData]);



  return (
    <>
      <Nav />
      <div className='activities-details-container'>
        <br />
        <tr>
          <td>
            <DatePicker selected={selectedDate}
              onChange={(date) => {
                setDate(date);
              }
              } />
          </td>

          <td></td>

        </tr>

      </div>
      <div className='activity-container'>
        <table className='customTable'>
          <thead>
            <tr>
              <td> <h4>Activity Code</h4> </td>
              <td><h4>Time spent</h4></td>
              <td><h4>Activity Description</h4></td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            {data.entries.map(activity => (
              <Activity key={v4()} activity={activity} order={data.entries.indexOf(activity)} username={username} date={formatDate(selectedDate)} parentFunc={fetchData} />
            ))}
          </tbody>

        </table>


      </div>
    </>
  );
}




function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');
}