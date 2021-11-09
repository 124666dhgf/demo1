import React from "react";
function Greeting(props)
{
    return <h1>WELCOME,{props.name}</h1>
}
function Getgreet()
{
    return(
        <div>
            <Greeting name="ANU"/>
            <Greeting name="ARYAN"/>
            <Greeting name="ANAMIKA"/>
            <Greeting name="AMALU"/>

        </div>
    );
}
export default Getgreet;