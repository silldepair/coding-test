import { useState, useEffect } from "react";
import Chip from "./chip";
import { Colors } from "../../utils/colors";

export default function ClientSection({items}) {

    return (
        <section>
            <h5>
            Client :
            </h5>
            <section>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Industry</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.industry}</td>
                        <td>{item.contact}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </section>
        </section>
    );
}