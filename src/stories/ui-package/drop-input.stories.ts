import DropInput from "@/components/re-uc/drop-input";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DropInput> = {
  component: DropInput,
  parameters: {
    layout: "centered", // Centers the component in the Storybook Canvas
  },
  tags: ["autodocs"],
  title: "DropInput",
  argTypes: {
    onChange: {
      description: "Function to handle the selected options",
    },
    className: {
      description:
        "TailwindCSS class for customizing the component's appearance.",
      control: { type: "text" },
    },
    defaultSelected: {
      description: "Array of default selected options",
      defaultValue: [],
    },
    label: {
      description: "Label for the component",
      control: { type: "text" },
    },
    options: {
      description: "Array of options to be displayed in the component",
    },
    optionsClassName: {
      description: "TailwindCSS class for customizing the option's appearance.",
      control: { type: "text" },
    },
    optionsLabel: {
      description: "Label for the options List",
      control: { type: "text" },
    },
    theme: {
      description: "Change the theme of the component",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropInput>;

export const Default: Story = {
  args: {
    onChange: (selected: string[]) => console.log(selected),
    options: [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "Swift",
      "Go",
      "PHP",
      "SQL",
    ],
    theme: "Light",
    label: "Select Your Skills",
    optionsLabel: "Skills",
    className: "w-full",
    optionsClassName: "max-h-[90px]",
  },
};
