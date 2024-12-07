import DatePicker from "@/components/library/date-picker";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "DatePicker",
  argTypes: {
    theme: {
      description: "Change the theme of the component",
      control: { type: "select", options: ["Light", "Dark"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

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
