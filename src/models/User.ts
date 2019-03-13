import Model from "models/util/Model";

class User implements Model
{ 
  id: number;
  email: string;
  password: string;

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { email: string, password: string }): User
  {
    this.email = attrs.email;
    this.password = attrs.password;
    return this;
  }
}

export default User;