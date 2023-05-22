import React, { useRef,useContext } from 'react'
import {appContext} from './appContext'
const A = () => {
  const nameRef=useRef()
  const ctxData=useContext(appContext)

  const fnClick=()=>{
    let name=nameRef.current.value;
    ctxData.dispatch({
        type:'NAME_UPDATE',
        payload:name
    })
  }
  return (
    <div>
        <h1>A</h1>
        <p>
            Name:<input ref={nameRef} />
        </p>
        <button onClick={fnClick}>Submit</button>
    </div>
  )
}

export default A