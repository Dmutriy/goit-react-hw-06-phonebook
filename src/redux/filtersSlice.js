import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
