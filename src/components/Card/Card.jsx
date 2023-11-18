import React from 'react'
import './Card.css';
import pic from '../../images/per.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }} src={pic} alt="UserImage" />
                <div className="showStatus">
                <FontAwesomeIcon icon={faCircle} size='0.125x' color='green' /> 
                </div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey">... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span><FontAwesomeIcon icon={faCircle} /></span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;