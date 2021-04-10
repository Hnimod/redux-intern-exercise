import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { verifyService } from '../../api/verifyPhoneNumber';

interface RegistryState {
  phoneNumber: string;
  verify: boolean;
  loading: boolean;
}

const initialState: RegistryState = {
  phoneNumber: '',
  verify: false,
  loading: false,
};

const verifyPhoneNumber = createAsyncThunk(
  'registryReducer/verifyPhoneNumber',
  async (phoneNumber: string) => {
    const response = await verifyService(phoneNumber);
    return response.data;
  }
);

const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyPhoneNumber.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyPhoneNumber.fulfilled, (state, action) => {
        state.loading = false;
      });
  },
});

export default registrySlice.reducer;
