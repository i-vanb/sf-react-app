import React from "react"
import "../styles/About.css";


function ContactCard(props) {
    const {name, data} = props
    return (
        <div className="contacts__data_col">
            <p className="contacts__data_col_label">{name}</p>
            <p className="contacts__data_col_val">{data}</p>
        </div>
    )
}

export default ContactCard;
