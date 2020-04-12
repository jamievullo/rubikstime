import React from 'react'
import ScrapeDisplay from '../components/ScrapeDisplay' 
import {
    Card, CardBody,
    CardTitle, CardSubtitle
    } from 'reactstrap';

class UpcomingWCAEvents extends React.Component {

    state = {
        events: [],
        isLoading: true
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/wca_events")
        .then(response => response.json())
        // .then(data => console.log(data.results))
        .then(data => this.setState({
            // console.log(data.results)
            events: data.results,
            isLoading: false
        }))
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                    <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong>Upcoming WCA Events</strong></CardTitle>
                        <div id='wca-events' style={{color: '#364182'}}>
                            <CardSubtitle>{this.state.events.map((event, i) => <ScrapeDisplay key={i} event={event} />)}</CardSubtitle>
                            {/* <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle>
                            <CardSubtitle>Date - Name of Event - Location of Event(scraped stuff)</CardSubtitle> */}
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default UpcomingWCAEvents