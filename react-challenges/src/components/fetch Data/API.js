// how to make API calls to fetch data using axios. In axios we have two methods "GET" and "POST".
// API= APPLICATION PROGRAMMING INTERFACE

// GET METHOD ======> TO SHOW OR GET DATA 
// POST METHOD =======> TO STORE DATA INSIDE OUR DATABASE
//  PUT METHOD ========> TO UPDATE DATA
// DELETE METHOD ==========> DELETE METHOD

// STEPS : 
//a) install "axios" ======> npm install axios
//b) import axios from 'axios' in file.
/*c) Suppose we have button and when click on that button we get the data.
  so function is:
  const getQuote = () => {
    axios.get('url')
    .then(res => {
        console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = () => {
    const [posts, setPosts] = useState([]);

    const getData = async() => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
        setPosts(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getData();
    }, [])
    
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
      {
        posts.map((post, index) => {
            return (
                <div key={index}>
                    {post.title}
                    <div>
                        {post.body}
                    </div>
                </div>
                )
        })
      }
      </div>
    </div>
  )
}

export default API





  
