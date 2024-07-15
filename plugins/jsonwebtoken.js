import jwt from 'jsonwebtoken';

export default ({ app }, inject) => {
  inject('jwt', jwt);
};
