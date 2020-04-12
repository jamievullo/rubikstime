import React from 'react'

export default function ScrapeDisplay(props) {
    return (
        <div className="scrape justify-content-center" >                
            {props.event.date} - {props.event.name} - {props.event.location}       
        </div> 
    )
}