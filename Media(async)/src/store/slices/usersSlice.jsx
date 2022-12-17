import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUser';
import { addUser } from '../thunks/addUser';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  // Allow us to watch additional action types
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      // Update our state object however appropriate
      state.isLoading = true;

      // to show the user what we are loading data
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
