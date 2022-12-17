import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1)Create the thunk. Give it a base type that describes the purpose of the request
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  // 2)In the thunk, make the request, return the data that you want to use in the reducer
  const response = await axios.get('http://localhost:3005/users');

  // fixme:DEV only(test)
  await pause(1000);
  return response.data;
});

// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled ===  'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

// fixme:DEV only!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
