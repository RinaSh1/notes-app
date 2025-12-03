import { useEffect, useState } from "react";
import NotesList from "./NotesList.js"
import NotesContext from "./NotesContext.js";
import "./css/App.css";

function App() {
  const [addNote, setAddNote] = useState("");
  const [notes, setNotes] = useState([]);



  const handleAddNote = () => {
    if (addNote.trim() === "") return;

    setNotes([...notes, addNote]);

    setAddNote("");
    console.log(addNote, "note added!");
  }
  const deleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <NotesContext.Provider value={{ notes, handleAddNote, setAddNote, addNote, deleteNote }}>
      <div className="app-container">
        <input
          className="note-input"
          placeholder="add Note"
          value={addNote}
          onChange={(e) => setAddNote(e.target.value)}
        />
        <button className="add-button" onClick={handleAddNote}>Add note</button>
        <NotesList />
      </div>
    </NotesContext.Provider>
  );

}

export default App;
