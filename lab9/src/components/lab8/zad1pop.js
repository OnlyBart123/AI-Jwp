// src/App.js
import React from 'react';


function Cup({guest}) {
  
  return <h2>Tea cup for guest #{guest}</h2>
}

export default function TeaSetPop(){
  return(
    <>
    <Cup guest={1}/>
    <Cup guest={2}/>
    <Cup guest={3}/>
    </>
  )
}