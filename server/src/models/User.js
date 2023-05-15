import DBModel from "./DBModel.js";

/**
 * Model for users table
 *
 * @class User
 */
class User extends DBModel {
  constructor() {
    super("users");
  }
  async getUserDetails(userId) {
    const [details] = await this.query(getuserDetailsQuery, {
      userId,
    });
    return details || null;
  }
}

export default User;
