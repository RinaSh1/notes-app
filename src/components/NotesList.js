import { useContext } from "react";
import NotesContext from "./NotesContext";
import "./css/NotesList.css";

export default function NotesList() {
    const { notes, deleteNote } = useContext(NotesContext);
    return (
        <>
            <div className="notes-list-container">

                <ul className="notes-list">
                    {notes.map((note, index) => (
                        <li className="note-item" key={index}>{note}
                            <button className="delete-button" onClick={() => deleteNote(index)}>Delete</button>
                        </li>

                    ))}

                </ul>
            </div>

        </>
    );

}