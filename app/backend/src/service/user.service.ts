import UserModel from '../database/models/User';
import JWT from '../auth/jwt';
import Bcrypt from '../auth/Bcript';

const jwt = new JWT();

export default class UserService {
  public model = UserModel;

  public async login(email: string, password: string): Promise<string | null> {
    const user = await this.model.findOne({
      where: { email },
    });

    if (user && Bcrypt.compare(password, user.password)) {
      const token = jwt.createToken({ email, role: user?.role });
      return token;
    }
    return null;
  }

  // public async validate(): Promise<string | object> {
  //   const userValidate = await this.model.findOne({
  //     where: { email: user.email },
  //   }) as LoginType;

  //   return { role: userValidate.role };
  // }
}
