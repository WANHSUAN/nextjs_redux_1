import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

type Note = {
  id: string;
  heading: string;
  content: string;
};

interface NoteState {
  notes: Array<Note>;
}

const initialState: NoteState = {
  notes: [{id: "1", heading: "Todo for the day", content: ""}],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload;
      state.notes.push(note);
    },
  },
});

export const {addNote} = noteSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default noteSlice.reducer;
