import Boom from "@hapi/boom";

import Note from "../models/Note.js";
import logger from "../utils/logger.js";

/**
 * Get all notes
 *
 * @param {Object} [query]
 * @return {Object}
 * */
export async function getAllNotes(query) {
  const noteFilter = query.noteName ? query.noteName.split(",") : [];

  logger.info("Fetching a list of all notes");

  const notes = await new Note().getAllNotes();

  const paresdNotes = notes.map((note) => ({
    ...note,
  }));

  let filteredNotes = paresdNotes;

  if (noteFilter.length) {
    filteredNotes = paresdNotes.filter((note) =>
      noteFilter.includes(note.noteName)
    );
  }

  return {
    data: filteredNotes,
    message: "List of notes",
  };
}

/**
 * Get specific note by id
 *
 * @param {string} id
 * @returns {object}
 */
export async function getNote(id) {
  logger.info(`Fetching note with noteId ${id}`);

  const note = await new Note().getNoteDetails(id);

  // console.log(note);
  if (!note) {
    logger.error(`Cannot find note with noteId ${id}`);

    throw new Boom.notFound(`Cannot find note with noteId ${id}`);
  }

  return {
    data: note,
    message: `Details of noteId ${id}`,
  };
}

/**
 * Post note
 *
 * @param {object}
 * @returns {object}
 */
export async function addNote(params) {
  logger.info(`Payload Recieved ${params}`);

  const noteTableInsertParams = {
    noteName: params.noteName,
    description: params.description,
  };

  const existingData = await new Note().findByParams(noteTableInsertParams);

  if (existingData) {
    logger.error("Data with same payload already exists");

    throw new Boom.badRequest("Data with same payload already exists");
  }

  logger.info("Saving new note data");
  const [noteTableInsertData] = await new Note().save(noteTableInsertParams);

  logger.info("Retriving the saved note details");
  const data = await new Note().getNoteDetails(noteTableInsertData.id);

  return {
    data,
    message: "Record added successfully",
  };
}

/**
 * Update existing note record
 *
 * @param {string} id
 * @param {Object} params
 * @returns {Object}
 */
export async function updateNote(id, params) {
  logger.info(`Checking existance of note with id ${id}`);

  const note = await new Note().getById(id);

  if (!note) {
    logger.error(`Cannot find note with id ${id}`);

    throw new Boom.notFound(`Cannot find note with id ${id}`);
  }

  logger.info(`Updating data of note with id ${id}`);
  await new Note().updateById(id, {
    noteName: params.noteName,
    description: params.description,
  });

  logger.info(`Fetching updated data of note with id ${id}`);
  const updatedData = await new Note().getNoteDetails(id);

  return {
    data: updatedData,
    message: "Record Updated Successfully",
  };
}

/**
 * Remove an existing record based on identifier
 *
 * @param {string} id
 * @returns {Object}
 */
export async function removeNote(id) {
  logger.info(`Checking if note with id ${id} exists`);
  const note = await new Note().getById(id);

  if (!note) {
    logger.error(`Cannot delete note with id ${id}because it doesn't exist`);

    throw new Boom.notFound(
      `Cannot delete note with id ${id}because it doesn't exist`
    );
  }

  await new Note().removeById(id);

  return {
    message: "Record removed successfully",
  };
}
