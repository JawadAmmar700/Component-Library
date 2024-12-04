import DatePicker from "@/components/showcase/picker-varients/date-picker";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
