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
                <Card style={{borderWidth: '.15em', borderColor: '#364182'}}>
                    <CardBody>
                    <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong><a href='https://www.worldcubeassociation.org/competitions?utf8=%E2%9C%93&region=_North+America&search=&state=present&year=all+years&from_date=&to_date=&delegate=&display=list' style={{color: '#364182'}} target="_blank" rel="noopener noreferrer">Upcoming WCA Events - Click Here</a></strong></CardTitle>
                        <div id='wca-events' style={{color: '#364182'}}>
                            <CardSubtitle>{this.state.events.map((event, i) => <ScrapeDisplay key={i} event={event} />)}</CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default UpcomingWCAEvents