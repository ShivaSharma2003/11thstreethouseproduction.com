import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isMobileMenuOpen: boolean;
  isLoading: boolean;
  currentSection: string;
}

const initialState: UiState = {
  isMobileMenuOpen: false,
  isLoading: false,
  currentSection: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setLoading, setCurrentSection } = uiSlice.actions;
export default uiSlice.reducer;
