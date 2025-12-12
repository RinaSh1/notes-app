import { useState, useEffect } from "react";
import NotesList from "./NotesList.js"
import NotesContext from "./NotesContext.js";
import "./css/App.css";

function App() {
  const [addNote, setAddNote] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (addNote.trim() === "") return;

    setNotes([...notes, addNote]);

    setAddNote("");
    console.log(addNote, "note added!");
  }
  const deleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  const editNote = (index) => {
    const newText = prompt('Edit your Note', notes[index]);

    if (newText !== null && newText.trim() !== "") {
      const updatedNotes = [...notes];
      updatedNotes[index] = newText;
      setNotes(updatedNotes);
    }
  }

  return (
    <NotesContext.Provider value={{ notes, handleAddNote, setAddNote, addNote, deleteNote, editNote }}>
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
