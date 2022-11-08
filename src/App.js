import React, { useState } from "react";
import Items from "./Items";
import AddAlarmIcon from '@mui/icons-material/AddAlarm';

const App = () =>{

    const [TaskName , TaskChanger] = useState("");
    const [ListArr , ChangeList] = useState([]);

    const valueChanged = (event) =>{
        TaskChanger(() =>{
        return event.target.value

            })
        }


    const change = () => {
        ChangeList((old) => {
            return(
                [...old , TaskName]
            )
            
        })
        TaskChanger("");
    }



    return (
        <>
            <div className="parent">
                <div className="container">
                    <h1 className="head">Daily Tasks</h1>
                    <input className="input" type="text" onChange={valueChanged} value ={TaskName} placeholder="Add Tasks to The List"/>
                    <span  className="add" onClick={change} ><AddAlarmIcon className="addIcon"/></span>
                    <ul>
                            {ListArr.map((val , index) =>{
                                return (
                                    <Items 
                                        key = {index}
                                        item = {val}
                                    />
                                )
                            })}     
                    </ul>
                </div>
            </div>
        </>
    )
    

}


export default App;