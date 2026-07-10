import { useState } from "react";
import './styles/Cafeinfo.module.css'

function Cafeinfo() {
    const [cafeInfo, setCafeInfo] = useState({
        name: "Cafe Name",
        address: "Cafe Address",
        phone: "Cafe Phone"
    });

    return (
        <div className="cafe-info">
            <h2>{cafeInfo.name}</h2>
            <p>{cafeInfo.address}</p>
            <p>{cafeInfo.phone}</p>
        </div>
    );
}



export default Cafeinfo;