import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'

class SignIn extends React.Component {

    state = {
        username: '',
        password: '',
        errors: '',
        success: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        let user = {
            username: username,
            password: password
            }
        
        axios.post('http://localhost:3000/login', {user})
        .then(response => {
        if (response.data.logged_in) {
            this.props.handleLogin(response.data)
            this.setState({
                success: true,
                password: '',
            })
        } else {
            this.setState({
                errors: response.data.errors,
                username: "",
                password: ""
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    };

    //rendering of error messages in response from server controller actions
    errorMessages = () => {
        if(this.state.errors) {
            return this.state.errors.map((err, index) => (
                <Alert style={{color: 'red'}} key={index}>
                    {err}
                </Alert>
                )
            )
        }
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
