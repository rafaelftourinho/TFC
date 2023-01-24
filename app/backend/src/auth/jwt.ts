import * as jwt from 'jsonwebtoken';
import LoginType from '../interfaces/LoginType';

export default class JWT {
  public secret;

  constructor() {
    this.secret = 'jwt_secret';
  }

  public createToken(data: LoginType): string {
    const token = jwt.sign(data, this.secret, {
      expiresIn: 60 * 60 * 24 * 7,
      algorithm: 'HS256',
    });

    return token;
  }

  public verifyToken(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch (err) {
      return null;
    }
  }
}
