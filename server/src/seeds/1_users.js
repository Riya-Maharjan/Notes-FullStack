/**
 * Delete existing entries and seed values for `users`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          name: "Riya Maharjan",
          email: "riya@gmail.com",
          password:
            "$2b$10$kAQJD.wTXZGMepThiWekZO8YcQZWNaX27SeYKPOQFOxAZihjPrTFG",
        },
      ]);
    });
}
