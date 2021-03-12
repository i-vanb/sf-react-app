import React from "react"
import "../styles/About.css";


function ProfileCard(props) {
    const {name, pro, img} = props
    return (
        <div className="team__cards_item">
            <img className="team__cards_item_photo" src={img} alt="photo"/>
            <p className="team__cards_item_name">{name}</p>
            <p className="team__cards_item_pro">{pro}</p>
        </div>
    )
}

export default ProfileCard;
