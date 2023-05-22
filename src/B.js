import React, { useRef,useContext } from 'react'
import {appContext} from './appContext'
const B = () => {
    const locRef=useRef()
    const ctxData=useContext(appContext)
    const fnClick=()=>{
      let loc=  locRef.current.value;
      ctxData.dispatch({
        type:'LOC_UPDATE',
        payload:loc
      })
    }
  return (
    <div>
        <h1>B</h1>
        <p>
            Location:<input ref={locRef} />
        </p>
        <button onClick={fnClick}>Submit</button>
    </div>
  )
}

export default B