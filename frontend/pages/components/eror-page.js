import { useState, useEffect } from "react";
import { Colors } from "../../utils/colors";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Button from "./button";

export default function ErorPage({callback=()=>{}, title="Sorry..!! Something wrong with the server"}) {

    return (
        <section style={{fontFamily:"Arial", display:'flex', flexDirection:'Column', padding:20, justifyContent:'center', alignItems:'center'}}>
            <ClimbingBoxLoader size={10} color={Colors.cyan} loading={true} />
            <p style={{marginTop:0, fontSize:20, color:Colors.cyan}}>{title}</p>
            <Button title="Refresh" callback={callback} backgroundColor={Colors.cyan} />
        </section>
    );
}