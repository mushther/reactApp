import React from 'react'
import { useState } from 'react';
/*
const initialState = {
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": ""
}*/

const Home = () => {
    const [value, setValue] = useState("X");
    const [data, setData] = useState([]);

    const handleClick = (e, id) => {
        e.target.innerText = value;
        setValue(value === "X" ? "0" : "X");
        setData(value);
        let data1 = [];
        data1.push(data)
        localStorage.setItem("id", JSON.stringify(data1))
    }
    /*for (let key in data) {
        console.log(key + ":" + data[key]);
         if(key==="X" && key==="X" && key==="X"){

         }
    }*/
    console.log(JSON.parse(localStorage.getItem("id")));
    return (
        <>
            <h1>TikTokToe</h1>
            <div style={{ border: "1px solid red", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "40px", padding: "40px", width: "20%", margin: "auto" }}>
                <h1 style={{ border: "1px solid red" }} name="1" type="text" onClick={(e) => { handleClick(e, 1) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="2" type="text" onClick={(e) => { handleClick(e, 2) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="3" type="text" onClick={(e) => { handleClick(e, 3) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="4" type="text" onClick={(e) => { handleClick(e, 4) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="5" type="text" onClick={(e) => { handleClick(e, 5) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="6" type="text" onClick={(e) => { handleClick(e, 6) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="7" type="text" onClick={(e) => { handleClick(e, 7) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="8" type="text" onClick={(e) => { handleClick(e, 8) }} >-</h1>
                <h1 style={{ border: "1px solid red" }} name="9" type="text" onClick={(e) => { handleClick(e, 9) }} >-</h1>
            </div>
            <div style={{ border: "1px solid red", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "40px", padding: "40px", width: "20%", margin: "auto" }}>
                {
                    value === "0" ?
                        <button disabled={true} onClick={() => { setValue("X") }}>Player - 1 "X"</button>
                        : <button onClick={() => { setValue("X") }}>Player - 1 "X"</button>
                }
                {
                    value === "X" ?
                        <button disabled={true} onClick={() => { setValue("0") }}>Player - 2 "0"</button>
                        : <button onClick={() => { setValue("0") }}>Player - 2 "0"</button>
                }

            </div>
        </>
    )
}

export default Home