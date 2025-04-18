import { Colors } from "../../utils/colors";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import RingLoader from "react-spinners/RingLoader";

export default function Loading({size=75,color=Colors.blue, loading=false, marginTop=5, marginBottom=5, marginLeft=5, marginRight=5}) {

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:marginTop, marginBottom:marginBottom, marginLeft:marginLeft, marginRight:marginRight}}>
            <RingLoader
                color={color}
                loading={loading}
                size={75}
            />
        </div>
    );
}