import React from 'react';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddActivity() {


  const [activities, setactivities] = useState({ activities: [] });


  useEffect(() => {
    const fetchActivities = async () => {
      const response = await axios(
        `http://localhost:8000/api/activities`,
      );


      setactivities(response.data)
    };
    fetchActivities();
  }, []);


  //loop over obejec
  let options = []
  activities.activities.forEach(x => {
    options.push({ value: x.code, label: x.code })

  });








  return (
    <>
      <Nav />



    </>
  )


}


