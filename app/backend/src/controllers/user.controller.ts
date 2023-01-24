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
      if (user === null) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
      return res.status(200).json({ token: user });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  public validate = (req: Request, res: Response) =>
    res.status(200).json({ role: req.body.user.role })
  ;
}
