import React from 'react'
import {increment,decrement} from '../redux/Actions/index'
import {useDispatch,useSelector} from 'react-redux'



const PlusMinus = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.changeCount)
    //console.log("Count",count)
  return (
    <div>
        <h4>Functional Components</h4>
        <div style={{display:"flex",justifyContent:"center"}}>
            <button className='btn' style={{padding:"0px 30px",cursor:"pointer"}} onClick={()=>dispatch(decrement(1))}> - </button> &nbsp;&nbsp;
            <p>{count}</p>&nbsp;&nbsp;
            <button className='btn'style={{padding:"0px 30px", cursor:"pointer"}} onClick={()=>dispatch(increment(2))}> + </button>
        </div>
    </div>
  )
}

export default PlusMinus