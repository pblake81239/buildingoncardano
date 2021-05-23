import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { baseUrl, registration } from '../assets/services';
import { Redirect } from "react-router-dom";
class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      redirect: false

    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }

    get isLogin() {
      return this.props.authState === STATE_LOGIN;
    }

    get isSignup() {
      return this.props.authState === STATE_SIGNUP;
    }

    changeAuthState = authState => event => {
      event.preventDefault();

      this.props.onChangeAuthState(authState);
    };

    handleSubmit = async event => {
      event.preventDefault();
      var authState = this.props.authState;
      var password = this.state.password;
      if (authState == 'SIGNUP') {
        var confirmPassword = this.state.confirmPassword;
        if (password == confirmPassword) {
          var status = await this.register();
          console.log(status.response);

          if (status.response == 'user_exists') {
            console.log('user exists!')
          }
          else {
            console.log('success!')
            this.setRedirect();
          }
        } else {
          console.log('passwords dont match');
        }






      } else {
        //login
      }

    };

    async register() {
      var authState = this.props.authState;
      var email = this.state.email;
      var password = this.state.password;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password
        })
      };
      var response = await fetch(baseUrl + registration, requestOptions);
      var data = await response.json();
      return data;
    }

    renderButtonText() {
      const { buttonText } = this.props;

      if (!buttonText && this.isLogin) {
        return 'Login';
      }

      if (!buttonText && this.isSignup) {
        return 'Signup';
      }

      return buttonText;
    }

    render() {
      const {
        showLogo,
        usernameLabel,
        usernameInputProps,
        passwordLabel,
        passwordInputProps,
        confirmPasswordLabel,
        confirmPasswordInputProps,
        children,
        onLogoClick,
      } = this.props;

      return (
        <Form onSubmit={this.handleSubmit}>
          {this.renderRedirect()}
          {showLogo && (
            <div className="text-center pb-4">
              <img
                src={logo200Image}
                className="rounded"
                style={{ width: 60, height: 60, cursor: 'pointer' }}
                alt="logo"
                onClick={onLogoClick}
              />
            </div>
          )}
          <FormGroup>
            <Label for={usernameLabel}>{usernameLabel}</Label>
            <Input {...usernameInputProps} onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
          </FormGroup>
          <FormGroup>
            <Label for={passwordLabel}>{passwordLabel}</Label>
            <Input {...passwordInputProps} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
          </FormGroup>
          {this.isSignup && (
            <FormGroup>
              <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
              <Input {...confirmPasswordInputProps} onChange={e => this.setState({ confirmPassword: e.target.value })} value={this.state.confirmPassword} />
            </FormGroup>
          )}
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
            </Label>
          </FormGroup>
          <hr />
          <Button
            size="lg"
            className="bg-gradient-theme-left border-0"
            block
            onClick={this.handleSubmit}>
            {this.renderButtonText()}
          </Button>

          <div className="text-center pt-1">
            <h6>or</h6>
            <h6>
              {this.isSignup ? (
                <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                  Login
                </a>
              ) : (
                <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                  Signup
                </a>
              )}
            </h6>
          </div>

          {children}
        </Form>

      );
    }
  }

  export const STATE_LOGIN = 'LOGIN';
  export const STATE_SIGNUP = 'SIGNUP';

  AuthForm.propTypes = {
    authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
    showLogo: PropTypes.bool,
    usernameLabel: PropTypes.string,
    usernameInputProps: PropTypes.object,
    passwordLabel: PropTypes.string,
    passwordInputProps: PropTypes.object,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordInputProps: PropTypes.object,
    onLogoClick: PropTypes.func,
  };

  AuthForm.defaultProps = {
    authState: 'LOGIN',
    showLogo: true,
    usernameLabel: 'Email',
    usernameInputProps: {
      type: 'email',
      placeholder: 'your@email.com',
    },
    passwordLabel: 'Password',
    passwordInputProps: {
      type: 'password',
      placeholder: 'your password',
    },
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordInputProps: {
      type: 'password',
      placeholder: 'confirm your password',
    },
    onLogoClick: () => { },
  };

  export default AuthForm;
