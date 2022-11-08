import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Items = (props) =>{


    const [line , addLine] = useState(false)
    const del = () => {
        addLine (() => {
            
            return true;
        })
    }


    return(
        <>
            <div className="sec">

                <span className="del" onClick={del}>
                <DeleteIcon/>
                </span>
                <li className="list" style={
                    {textDecoration: line? "line-through" : "none"} 
                    }>
                    {props.item}
                </li>
                
            </div>
            <hr className="rule"/>
        </>
    )



}









export default Items;