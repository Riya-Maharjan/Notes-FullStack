import DBModel from './DBModel.js';
import getAllNotesQuery from '../db/queries/getAllNotes.js';
import getNoteDetailsQuery from '../db/queries/getNoteDetail.js';

/**
 * Model for note table
 *
 * @class Note
 */
class Note extends DBModel {
  constructor() {
    super('note');
  }

  getAllNotes() {
    return this.query(getAllNotesQuery);
  }

  async getNoteDetails(noteId) {
    const [details] = await this.query(getNoteDetailsQuery, {
      noteId,
    });

    return details || null;
  }
}

export default Note;
