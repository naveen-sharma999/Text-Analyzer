import React from 'react'
import { Link } from "react-router-dom";

export default function NotFound(props) {
  return (
      <div className='d-flex flex-column justify-content-center align-items-center' style={{'height': '500px'}}>
        <h1>ERROR 404!</h1>
        <h3>page not found</h3>
        <p><Link to="/">Go Home</Link></p>
      </div>
  );
}