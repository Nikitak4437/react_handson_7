import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: [
    { name: "John", id: 1, age: "20", course: "MERN", batch: "October" },
    { name: "Doe", id: 2, age: "25", course: "MERN", batch: "November" },
    { name: "Biden", id: 3, age: "26", course: "MERN", batch: "October" },
    { name: "Barar", id: 4, age: "22", course: "MERN", batch: "September" },
    { name: "Christ", id: 5, age: "23", course: "MERN", batch: "October" },
    { name: "Elent", id: 6, age: "24", course: "MERN", batch: "November" },
  ],
  reducers: {
    editData: (state, action) => {
      console.log("Edit : ");
      console.log(action.payload);
      state[action.payload.index] = action.payload.newObj;
      return state; //  updated prevObj is the new state
    },
    addData: (state, action) => {
      state = [...state, action.payload.newObj];
      return state; //  updated prevObj is the new state

      //      console.log(action.payload);
    },
  },
});

export const { editData, addData } = dataSlice.actions;
export default dataSlice.reducer;
