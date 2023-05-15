/**
 * Delete existing entries and seed values for `notes`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('note')
    .del()
    .then(() => {
      return knex('note').insert([
        {
          note_name: 'Assignment Submission',
          description:
            'Need to submit assignment on time'
        },
        {
          note_name: 'Reply Email',
          description:
            'Reply all the emails by 5:00'
        },
      ]);
    });
}
