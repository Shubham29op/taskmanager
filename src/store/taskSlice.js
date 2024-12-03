import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        status: action.payload.status || "Pending",
        assignee: action.payload.assignee || "",
        priority: action.payload.priority || "",
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    removeTask: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload);
      state.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    toggleTaskCompleted: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
         if (task.status !== "completed") {
           task.status = "Completed";
           task.endDate = new Date().toISOString();
         } else {
           task.status = "Pending";
           task.endDate = null;
         }
          localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    updateTask: (state, action) => {
      const { id, ...updatedTaskFields } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state[taskIndex] = { ...state[taskIndex], ...updatedTaskFields };
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompleted, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;

export const selectAllTasks = (state) => state.tasks;


