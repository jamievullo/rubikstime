import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Form style={{width: '12em'}} onSubmit={this.handleSubmit}>
                    <Form.Label style={{color: "#325bfb"}}>Continue World Domination</Form.Label>
                    <Form.Control style={{width: '10em', marginLeft: '1em'}} id="username" type="text" name="username" placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <Form.Control style={{width: '10em', marginLeft: '1em'}} id="password" type="password" name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <center><Button type='submit' style={{backgroundColor: '#ffc600', color: '#364182'}}>Submit</Button></center>
                </Form>
            </div>
        )
    }
}

export default SignIn
