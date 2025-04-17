import { useState, useEffect } from "react";
import { Colors } from "../../utils/colors";

export default function Divider({height=1, width="100%", marginLeft=5, marginRight=5, marginTop=5, marginBottom=5, color="gray"}) {

    return (
        <div style={{backgroundColor:color, width:width, height:height, marginTop:marginTop, marginBottom:marginBottom, marginLeft:marginLeft, marginRight:marginRight}} />
    );
}