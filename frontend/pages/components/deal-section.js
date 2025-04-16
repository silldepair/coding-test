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
            <Chip height={22} title={status} backgroundColor={color} />
        );
    }

    return (
        <section>
            <h5>
            Deal :
            </h5>
            <section>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Client</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.client}</td>
                        <td>{item.value}</td>
                        <td>{generateBadgeStatus(item.status)}</td>
                    </tr>
                    ))}
                </tbody>
                
            </table>
            </section>
        </section>
    );
}