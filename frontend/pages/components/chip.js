import { useState, useEffect } from "react";
import { Colors } from "../../utils/colors";

export default function Chip({title="", isOutline=false, borderWidth=1, isRandomColor=false, fontSize=12, fontWeight="bold", fontColor="white", height=30, borderRadius=height/2, paddingHorizontal=10, paddingVertical=5, marginLeft=0, marginRight=10, marginTop=5, marginBottom=5, backgroundColor=Colors.success}) {
    
    var border = "";

    if(isRandomColor){
        var pallete = [ Colors.success, Colors.blue, Colors.tableDealHead, Colors.danger,];
        if(title.length>0){
            var index = Math.floor((title.toLocaleLowerCase().charCodeAt(0) - 97 + 1)/(26/pallete.length));
            backgroundColor = pallete[index];
        }
        if(isOutline){
            border = borderWidth+"px solid "+pallete[index];
            backgroundColor = "transparent";
            fontColor = pallete[index];
        }
    }

    return (
        <div style={{display:'flex', border:border, alignItems:'center', height:height, borderRadius:borderRadius, paddingLeft:paddingHorizontal, paddingRight:paddingHorizontal, marginTop:marginTop, marginBottom:marginBottom, marginRight:marginRight, marginLeft:marginLeft, backgroundColor:backgroundColor, }}>
            <p style={{fontWeight:fontWeight, textAlign:'center', fontSize:fontSize, color:fontColor}}>{title}</p>
        </div>
    );
}