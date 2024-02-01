import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from './contacts-operations';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContact.fulfilled](state, action) {
      console.log(action.payload);

      state.contacts = action.payload;
    },
    [contactsOperations.addContact.fulfilled]: (state, action) => {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    [contactsOperations.deleteContact.fulfilled]: (state, action) => {
      const newContacts = state.contacts.filter(
        item => item.id !== action.payload
      );

      return { ...state, contacts: newContacts };
    },
    [contactsOperations.filter]: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default contactsSlice.reducer;
