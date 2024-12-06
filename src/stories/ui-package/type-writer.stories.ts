import TypeWriter from "@/components/re-uc/type-writer";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TypeWriter> = {
  component: TypeWriter,
  parameters: {
    layout: "centered", // Centers the component in the Storybook Canvas
  },
  tags: ["autodocs"],
  title: "TypeWriter",
  argTypes: {
    text: {
      control: { type: "text" },
      description: "The text to be displayed",
    },
    animationDuration: {
      control: { type: "number" },
      description:
        "The duration of the animation in milliseconds for the typing effect",
      defaultValue: 100,
    },
    cursorStyle: {
      description: "TailwindCSS class for customizing the cursor's appearance",
      control: { type: "text" },
    },
    TextStyle: {
      description: "TailwindCSS class for customizing the text appearance",
      control: { type: "text" },
    },
    loop: {
      description: "Whether to loop the animation or not",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TypeWriter>;

export const Default: Story = {
  args: {
    text: "const greeting = 'Welcome to the future';",
    loop: false,
    animationDuration: 80,
    TextStyle: "font-mono text-blue-400",
    cursorStyle: "bg-blue-400",
  },
};

export const Custom: Story = {
  args: {
    text: "echo 'Hello, Terminal World!'",
    loop: true,
    animationDuration: 100,
    TextStyle: "font-mono text-green-500",
    cursorStyle: "bg-green-500",
  },
};
