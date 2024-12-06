import UseScrollDemo from "@/components/showcase/use-scroll";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UseScrollDemo> = {
  component: UseScrollDemo,
  parameters: {
    layout: "centered", // Centers the component in the Storybook Canvas
  },
  //   tags: ["autodocs"],
  title: "use-scroll",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof UseScrollDemo>;

export const Default: Story = {
  args: {},
};
