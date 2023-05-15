import * as userService from "../services/user.js"; // only for named Export
import logger from "../utils/logger.js";
import jwt from "jsonwebtoken";

/**
 * Controller to add a new user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addUser(req, res, next) {
  userService
    .createUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller for user login
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
  userService
    .login(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of all users
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getUsers(req, res, next) {
  userService
    .getUsers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of logged in user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getUser(req, res, next) {
  try {
    let token = req.headers["authorization"].split(" ")[1];

    logger.info(token);

    if (!token) {
      return res.status(401).json({
        message: "Authoriztion Credentials was not found",
      });
    }

    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    if (decoded) {
      return userService
        .getUser(decoded.id)
        .then((data) => res.json(data))
        .catch((err) => next(err));
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

