import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'

class Registration extends React.Component {

    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
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
        if(this.state.password === this.state.passwordConfirmation) {
        const {username, password} = this.state
        let user = {
            username: username,
            password: password
            }
        axios.post('http://localhost:3000/users', {user})
        .then(response => {
            if (response.data.status === 'created') {
                console.log("user created")
                // callback passed in thru props logging in user after signup
                this.props.handleLogin(response.data)
                this.setState({
                    password: '',
                    passwordConfirmation: ''
                })
                //sets response.data.user to userData variable
                // const userData = response.data.user //??
            } else {
                console.log("oops")
                this.setState({
                    errors: response.data.errors
                })
            }
        })
            .catch(error => console.log('api errors:', error))

        } else {
            this.setState({
                passwordConfirmation: '',
                password: '',
                errors: 'Password does not match'
            })
            return this.state.errors
        }
    };


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
                    <Form.Label style={{color: "#325bfb"}}>Keep Track of Lifetime Stats</Form.Label>
                    <Form.Control style={{width: '10em', marginLeft: '1em'}} id="username" type="text" name="username" placeholder='Username' value={this.state.username} onChange={this.handleChange} />
                    <Form.Control style={{width: '10em', marginLeft: '1em'}} id="password" type="password" name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                    <Form.Control style={{width: '10em', marginLeft: '1em'}} id="password-confirmation" type="password" name="passwordConfirmation" placeholder='Confirm Password' value={this.state.passwordConfirmation} onChange={this.handleChange} />
                    <center><Button type='submit' style={{backgroundColor: '#ffc600', color: '#364182'}}>Submit</Button></center>
                </Form>
            </div>
        )
    }
}

export default Registration
