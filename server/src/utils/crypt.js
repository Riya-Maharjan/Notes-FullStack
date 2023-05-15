import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Hash a string
 *
 * @param {string} password
 * @return {string}
 */
export function hash(password) {
  return bcrypt.hashSync(password, 10);
}

/**
 * Compare the actual string with the hashed string
 *
 * @param {string} password
 * @param {string} hash
 * @return {boolean}
 */
export function compare(password, hash) {
  return bcrypt.compareSync(password, hash);
}

/**
 * Create a json web token
 *
 * @param {Object} user
 * @returns {string}
 */
export function createToken(data) {
  return jwt.sign(data, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
}
