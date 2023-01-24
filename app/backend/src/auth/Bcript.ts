import * as bcrypt from 'bcryptjs';

export default class Bcrypt {
  public static compare(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
