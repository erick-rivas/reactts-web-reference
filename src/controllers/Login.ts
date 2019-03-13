import View from 'views/Login';
import Api from 'sources/Api';

class Login
{
  private view: View;
  private api: Api;

  constructor(view: View, src: { api: Api })
  {
    this.view = view;
    this.api = src.api;
  }

  public onMount() { }

  public onLogin(email: string, password: string)
  {
    this.api.getUserAuth(email, password)
      .then(res =>
      {
        if (res) this.view.navHome();
        else this.view.setError("Invalid email or password");
      });
  }
}

export default Login;