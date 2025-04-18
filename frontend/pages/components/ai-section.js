import { Colors } from "../../utils/colors";
import RingLoader from "react-spinners/RingLoader";
import Button from "./button";
import Loading from "./loading";

export default function AiSection({question="", setQuestion=()=>{}, loading=false, clear=()=>{}, handleAskQuestion=()=>{}, answer=""}) {

    return (
        <div style={{display:'flex', flexDirection:'column', marginBottom:20, maxWidth:680}}>
            <section style={{display:'flex', flexDirection:'row', marginBottom:0, justifyContent:'flex-end', alignItems:'center'}}>
                <p style={{fontSize:15, color:Colors.cyan, marginRight:10}}>Ask AI</p>
                <input
                    style={{border:"1px solid"+Colors.cyan, padding:5, marginRight:5}}
                    type="text"
                    placeholder="Enter your question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                    style={{border:"0px", backgroundColor:Colors.cyan, height:25}} 
                    onClick={handleAskQuestion}
                    >
                    <div style={{color:'white', fontWeight:'bold'}}>Ask</div>
                </button>
            </section>
            {loading && (
                <Loading loading={loading}/>
            )}
            {answer && (
                <div style={{ border:"1px solid gray", borderTopLeftRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10, padding:10, marginBottom: 20 }}>
                    <div style={{display:'flex', marginBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
                        <strong style={{color:Colors.darkgray}}>AI Response:</strong> 
                        <button onClick={clear} style={{borderRadius:5, backgroundColor:Colors.blue, border:"0px", padding:0}}>
                            <p style={{marginTop:5, marginBottom:5, marginLeft:10, marginRight:10, color:'white'}}>x</p>
                        </button>
                    </div>
                    <div>
                        <div style={{display:'flex', marginBottom:10, justifyContent:'flex-end'}}>
                            <p style={{padding:5, backgroundColor:Colors.cyan, borderTopLeftRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10, }}>
                                {question}
                            </p>
                        </div>
                        <div style={{display:'flex', justifyContent:'flex-start'}}>
                            <p style={{padding:5, marginRight:20, backgroundColor:Colors.cyan, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10, }}>
                                {answer}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    );
}