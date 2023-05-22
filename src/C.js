import React, { useContext } from 'react'
import {appContext} from './appContext'

const C = () => {
   const ctxData= useContext(appContext)
  return (
    <div>
        <h1>C</h1>
        <h3>Name: {ctxData.state.name} </h3>
        <h3>Location:{ctxData.state.loc}</h3>
    </div>
  )
}

export default C