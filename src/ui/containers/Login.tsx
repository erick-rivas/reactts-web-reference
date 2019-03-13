import LoginView from "views/Login";
import LoginCtrl from "controllers/Login";
import LoginComponent from "ui/components/Login";

import Factory from 'controllers/Factory';


class Login extends LoginComponent implements LoginView
{
  private ctrl: LoginCtrl;

  constructor(props: any)
  {
    super(props);
    this.ctrl = Factory.createLogin(this);
    this.state = {};
  }

  public componentDidMount()
  {
    this.ctrl.onMount();
    this.setState(s => ({
      onLogin: this.onLogin
    }));

  }

  //Events

  onLogin = e =>
  {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    this.ctrl.onLogin(email, password);
  }

  //Methods (override)

  navHome()
  {
    this.props.history.push('/');
  }

  setError(error: string)
  {
    this.setState(s => ({
      error: error
    }));
  }
}

export default Login;