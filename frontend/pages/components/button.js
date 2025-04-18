import { Colors } from "../../utils/colors";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Button({callback=()=>{}, title="Refresh", marginLeft=5, marginRight=5, marginTop=5, marginBottom=5, borderRadius=5, backgroundColor=Colors.blue, fontColor="white", fontSize=14, width=0, height=0}) {

    return (
        <button
             onClick={()=>{
                callback();
            }}
             style={{borderRadius:borderRadius, marginLeft:marginLeft, marginRight:marginRight, marginTop:marginTop, marginBottom:marginBottom, backgroundColor:backgroundColor, border:"0"}}>
            <p style={{fontWeight:'bold', color:fontColor, marginLeft:10, marginRight:10}}>{title}</p>
        </button>
    );
}