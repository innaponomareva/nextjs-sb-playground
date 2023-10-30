import type { Meta, StoryObj } from "@storybook/react";
import Task from "@/components/Task";

const meta: Meta<typeof Task> = {
  title: "Components/Task",
  component: Task,
  parameters: {
    layout: "fullscreen",
  },
  //   tags: ["autodocs"],
  decorators: [(story) => <div style={{ padding: "2rem" }}>{story()}</div>],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Task 1",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      id: "2",
      title: "Task 2",
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      id: "3",
      title: "Task 3",
      state: "TASK_ARCHIVED",
    },
  },
};
