import { useState, useEffect } from "react";
import { Colors } from "../../utils/colors";

export default function Chip({title="", isRandomColor=false, fontSize=12, fontWeight="bold", fontColor="white", height=30, borderRadius=height/2, paddingHorizontal=10, paddingVertical=5, marginLeft=0, marginRight=10, marginTop=5, marginBottom=5, backgroundColor="green"}) {
    
    var bgColor = backgroundColor;

    if(isRandomColor){
        var pallete = [Colors.cyan, Colors.pink, Colors.yellow, Colors.light_orange, Colors.orange];
        if(title.length>0){
            var index = Math.floor((title.toLocaleLowerCase().charCodeAt(0) - 97 + 1)/5);
            console.log('indexcolor:',index);
            bgColor = pallete[index];
        }
    }

    return (
        <div style={{display:'flex', alignItems:'center', height:height, borderRadius:borderRadius, paddingLeft:paddingHorizontal, paddingRight:paddingHorizontal, marginTop:marginTop, marginBottom:marginBottom, marginRight:marginRight, marginLeft:marginLeft, backgroundColor:bgColor, }}>
            <p style={{fontWeight:fontWeight, textAlign:'center', fontSize:fontSize, color:fontColor}}>{title}</p>
        </div>
    );
}