import tasksData from "@/lib/tasksData";
import { createSlice } from "@reduxjs/toolkit";

const defaultTasks = [...tasksData];

export const TaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};

export const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;
