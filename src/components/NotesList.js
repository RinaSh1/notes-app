import { useContext } from "react";
import NotesContext from "./NotesContext";
import "./css/NotesList.css";

export default function NotesList() {
    const { notes, deleteNote, editNote } = useContext(NotesContext);
    return (
        <>
            <div className="notes-list-container">
                <ul className="notes-list">
                    {notes.map((note, index) => (
                        <li className="note-item" key={index}>
                            <span className="note-text">{note}</span>
                            <div className="note-actions">
                                <button className="edit-button" onClick={() => editNote(index)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteNote(index)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
