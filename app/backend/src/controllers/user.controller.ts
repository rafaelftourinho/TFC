import { Request, Response } from 'express';
import UserService from '../service/user.service';

export default class UserController {
  public service;

  constructor() {
    this.service = new UserService();
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await this.service.login(email, password);
      console.log(user);
      if (user === null) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
      return res.status(200).json({ token: user });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

//   public async validate(req: Request, res: Response) {
//     const { user } = req.headers;
//     const validator = await this.service.validate(user);
//     return res.status(200).json(validator);
//   }
}

export const { login } = new UserController();
