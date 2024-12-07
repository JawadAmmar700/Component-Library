import MobileDrop from "@/components/showcase/mobile-drop";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MobileDrop> = {
  title: "MobileDrop",
  component: MobileDrop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MobileDrop>;

export const Default: Story = {
  args: {
    list: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "GraphQL",
      "Python",
    ],
    defaultSelected: ["HTML", "CSS"],
  },
};
