import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
    } from 'reactstrap';

class UpcomingWCAEvents extends React.Component {
    
    //site scrubs old dates, so no need for any logic for processing old dates
    //https://www.worldcubeassociation.org/competitions?utf8=%E2%9C%93&region=_North+America&search=&state=present&year=all+years&from_date=&to_date=&delegate=&display=list
    //scrape url for upcoming north american events
    fetchEventsFromDatabase() {

    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong>Upcoming WCA Events</strong></CardTitle>
                        <div id='wca-events' style={{color: '#364182'}}>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event</CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default UpcomingWCAEvents