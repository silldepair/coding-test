import { useState, useEffect } from "react";
import Chip from "./chip";
import { Colors } from "../../utils/colors";

export default function ClientSection({items}) {

    return (
        <section>
            <p>
            Client :
            </p>
            <section>
            <table style={Style.table}>
                <thead>
                    <tr style={Style.trHead}>
                        <th style={{width:40, height:30, padding:5}}>No</th>
                        <th style={{width:220, padding:5}}>Name</th>
                        <th style={{width:180, padding:5}}>Industry</th>
                        <th style={{width:200, padding:5}}>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>(
                    <tr key={index} style={{"border": "0px solid blue", backgroundColor:index%2==1?Colors.tableClientEven:""}}>
                        <td style={Style.td}>{index+1}</td>
                        <td style={Style.td}>{item.name}</td>
                        <td style={Style.td}>{item.industry}</td>
                        <td style={Style.td}>{item.contact}</td>
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
        backgroundColor:Colors.tableClientOdd
    },
    trHead : {
        textAlign:'left',
        borderCollapse:"collapse",
        backgroundColor:Colors.tableClientHead
    },
    td : {
        padding:5,
    }
}