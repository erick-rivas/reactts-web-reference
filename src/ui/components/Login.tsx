import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import 'ui/styles/css/login.css'


class Login extends React.Component
{
  handleLogin(e: React.FormEvent<HTMLFormElement>)
  {
    e.preventDefault();
  }

  public render() 
  {
    const error = null;

    const errorMessage =
      error ?
        <div className={"error" + ' animated fadeIn'}>
          <div> {error}</div>
        </div> : null;

    return (
      <div className="module">
        <div className={"container" + ' animated zoomIn'}>
          <div className="form">
            <form onSubmit={this.handleLogin}>

              <h1 className={"title"}>Login</h1>

              <TextField
                name='email'
                label='Email'
                type='email'
                margin='dense'
                autoFocus
                required
                fullWidth /><br />

              <TextField
                name='password'
                label='Password'
                type='password'
                margin='dense'
                required
                fullWidth /><br />

              <Button
                className={"send"}
                color='primary'
                variant='raised'
                type='submit'
                fullWidth>
                Send
              </Button>
              <br />
              {errorMessage}
            </form>

            <div>
              <div className={"orLine"} />
              <div className={"orText"}> o </div>
            </div>

            <Button
              className={"outlook"}
              variant='raised'
              fullWidth>
              Login with Outlook
            </Button>
            <br />
            <Button
              className={"gmail"}
              variant='raised'
              fullWidth>
              Login with Gmail
            </Button>

          </div>

          <div className={"signup"}>
            Don't have an account
              <Button
              className={"invite"}
              variant='outlined'>
              Register
            </Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;