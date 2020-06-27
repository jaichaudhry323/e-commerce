import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    // dynamically setting our property value
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {

        return (

            <div className='sign-in'>

                <h2></h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />

                    {/* <input name='submit' type='submit' /> */}

                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                    </div>
                    <p>{'   '}</p>
                    <div className="buttons">
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >  {/* isGoogleSignIn property gets passed with a value of TRUE is we dont assign any value to it  */}
                        Sign In With Google
                        </CustomButton>
                    </div>

                </form>

            </div>

        )

    }
}

export default SignIn;