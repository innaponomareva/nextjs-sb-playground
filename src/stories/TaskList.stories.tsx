import type { Meta, StoryObj } from "@storybook/react";
import TaskList from "@/components/TaskList";
import tasks from "@/lib/tasksData";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import tasksData from "@/lib/tasksData";

// A super-simple mock of the state of the store
export const MockedState = {
  tasks: [...tasksData],
  status: "idle",
  error: null,
};

// A super-simple mock of a redux store
const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: "taskbox",
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta: Meta<typeof TaskList> = {
  title: "Components/TaskList",
  component: TaskList,
  parameters: {
    layout: "fullscreen",
  },
  //   tags: ["autodocs"],
  decorators: [(story) => <div style={{ padding: "2rem" }}>{story()}</div>],
  argTypes: {},
  excludeStories: /.*MockedState$/,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
  ],
};

export const WithPinnedTasks = {
  decorators: [
    (story) => {
      const pinnedtasks = [
        ...MockedState.tasks.slice(0, 4),
        { id: "5", title: "Task 5", state: "TASK_PINNED" },
        { id: "6", title: "Task 6", state: "TASK_PINNED" },
        { id: "7", title: "Task 7", state: "TASK_PINNED" },
      ];

      return (
        <Mockstore
          taskboxState={{
            ...MockedState,
            tasks: pinnedtasks,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const Loading = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          status: "loading",
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};

export const Empty = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          tasks: [],
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};
