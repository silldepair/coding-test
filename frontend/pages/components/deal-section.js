import { useState, useEffect } from "react";
import Chip from "./chip";
import { Colors } from "../../utils/colors";

export default function DealSection({items}) {

    function generateBadgeStatus(status){
        var color = Colors.success;
        if(status.toLowerCase() == 'closed lost'){
            color = Colors.danger
        }
        if(status.toLowerCase() == 'in progress'){
            color = Colors.warning
        }
        return (
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                <Chip height={22} marginBottom={0} marginTop={0} width={120} title={status} backgroundColor={color} />
            </div>
            
        );
    }

    function generateBgRowStatus(status){
        var color = Colors.tableDealSuccess
        if(status.toLowerCase() == 'closed lost'){
            color = Colors.tableDealLost
        }
        if(status.toLowerCase() == 'in progress'){
            color = Colors.tableDealProgress
        }
        return color;
    }
    

    return (
        <section>
            <p>
            Deal :
            </p>
            <section>
            <table style={Style.table}>
                <thead>
                    <tr  style={Style.trHead}>
                        <th style={{width:40, height:30, padding:5}}>No</th>
                        <th style={{width:240, padding:5}}>Client</th>
                        <th style={{width:170, padding:5}}>Value</th>
                        <th style={{width:190, padding:5}}>Status</th>
                    </tr>
                </thead>
                <tbody >
                    {items.map((item, index)=>(
                    <tr key={index}  style={{color:Colors.darkgray, backgroundColor:generateBgRowStatus(item.status)}}>
                        <td style={Style.td}>{index+1}</td>
                        <td style={Style.td}>{item.client}</td>
                        <td style={Style.td}>{item.value}</td>
                        <td style={Style.td}>{generateBadgeStatus(item.status)}</td>
                    </tr>
                    ))}
                </tbody>
                
            </table>
            </section>
        </section>
    );

    
}

const Style = {
    table:{
        color:"white",
        borderCollapse:"collapse",
        backgroundColor:Colors.tableDealOdd,
        fontWeight:'bold'
    },
    trHead : {
        textAlign:'left',
        borderCollapse:"collapse",
        backgroundColor:Colors.green
    },
    td : {
        padding:5,
        height:30
    }
}