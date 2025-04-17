import { useState, useEffect } from "react";
import { Colors } from "../../utils/colors";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Button from "./button";

export default function ErorPage({callback=()=>{}, title="Sorry..!! \nSomething Wrong With The Server"}) {

    return (
        <section style={{display:'flex', flexDirection:'Column', padding:20, justifyContent:'center', alignItems:'center'}}>
            <ClimbingBoxLoader size={10} color={Colors.warning} loading={true} />
            <p style={{marginTop:0, color:Colors.warning}}>{title}</p>
            <Button title="Refresh" callback={callback} backgroundColor={Colors.cyan} />
        </section>
    );
}