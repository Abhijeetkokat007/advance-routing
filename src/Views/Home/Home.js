import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home(){

    return(
        <h1>Home page</h1>
        // <Link to={'/Post'}>Post </Link>
        // <Link to={`/Post/ReadPost/${id}`}> more details</Link>
    )
}

export default Home