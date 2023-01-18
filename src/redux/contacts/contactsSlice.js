import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items = [...state.items, action.payload];
      },
      prepare(newContact) {
        return {
          payload: {
            id: nanoid(),
            ...newContact,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
