import TimePicker from "@/components/library/time-picker";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "TimePicker",
  argTypes: {
    theme: {
      description: "Change the theme of the component",
      control: { type: "select", options: ["Light", "Dark"] },
    },
    className: {
      description:
        "TailwindCSS class for customizing the component appearance.",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const LightMode: Story = {
  args: {
    //👇 The args you need here will depend on your component
    theme: "light",
  },
};

export const DarkMode: Story = {
  args: {
    //👇 The args you need here will depend on your component
    theme: "dark",
  },
};
