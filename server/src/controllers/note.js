import * as noteService from "../services/note.js"; // only for named Export

/**
 * Controller to get details of all notes
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getNotes(req, res, next) {
  noteService
    .getAllNotes(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get detail of specific notes
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getNote(req, res, next) {
  noteService
    .getNote(+req.params.noteIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to add new note record
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function saveNote(req, res, next) {
  noteService
    .addNote(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update details of all notes
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function updateNote(req, res, next) {
  noteService
    .updateNote(+req.params.noteIdentifier, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to remove a note record
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function removeNote(req, res, next) {
  noteService
    .removeNote(+req.params.noteIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
