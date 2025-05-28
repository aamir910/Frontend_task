import { createSlice } from '@reduxjs/toolkit';

const getStoredAuth = () => {
  const storedAuth = localStorage.getItem('auth');
  if (!storedAuth) return null;
  
  const { user, accessToken, refreshToken, expiresAt } = JSON.parse(storedAuth);
  if (new Date().getTime() > expiresAt) {
    localStorage.removeItem('auth');
    return null;
  }
  return { user, accessToken, refreshToken };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getStoredAuth()?.user || null,
    accessToken: getStoredAuth()?.accessToken || null,
    refreshToken: getStoredAuth()?.refreshToken || null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      
      // Store auth data with 2-hour expiration
      const expiresAt = new Date().getTime() + (2 * 60 * 60 * 1000);
      localStorage.setItem('auth', JSON.stringify({
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        expiresAt
      }));
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('auth');
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;