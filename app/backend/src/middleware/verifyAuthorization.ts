import { RequestHandler } from 'express';
// import { verifyToken } from '../auth/jwt';
import JWT from '../auth/jwt';

const jwt = new JWT();

const verifyAuthorization: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ message: 'Token not found' });
  }

  const token = jwt.verifyToken(authorization);

  if (!token) {
    return res.status(401).send({ message: 'Token must be a valid token' });
  }
  req.body.user = token;
  next();
};

export default verifyAuthorization;
