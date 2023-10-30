import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "@/components/CustomButton";
import { BsPlusCircle } from "react-icons/bs";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Button",
  component: CustomButton,
  parameters: {
    layout: "fullscreen",
  },
  // tags: ["autodocs"],
  decorators: [(story) => <div style={{ padding: "2rem" }}>{story()}</div>],
  argTypes: {
    id: {
      control: "text",
    },
    icon: {
      options: ["none", "icon"],
      mapping: {
        none: null,
        icon: <BsPlusCircle />,
      },
      control: {
        type: "radio",
      },
    },
    iconSize: {
      options: ["sm", "lg", "xl"],
      control: {
        type: "radio",
      },
    },
    iconColor: {
      control: {
        type: "color",
      },
    },
    label: {
      control: "text",
    },
    tooltip: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    icon: <BsPlusCircle />,
    iconSize: "xl",
  },
};

export const Label: Story = {
  args: {
    id: "2",
    label: "Button",
  },
};

export const IconLabel: Story = {
  args: {
    id: "3",
    icon: <BsPlusCircle />,
    label: "Button",
  },
};
