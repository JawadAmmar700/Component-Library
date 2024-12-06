import Picker from "@/components/re-uc/picker";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Picker> = {
  component: Picker,
  parameters: {
    layout: "centered", // Centers the component in the Storybook Canvas
  },
  tags: ["autodocs"],
  title: "Picker",
  argTypes: {
    visibleItems: {
      description: "The number of items visible in the picker.",
      control: { type: "number" },
    },
    scrollVelocity: {
      description:
        "The velocity of scrolling, determined by predefined numeric values (0.5 to 3).",
      control: { type: "number" },
    },
    onValueChange: {
      description:
        "Callback function triggered when the selected value changes, accepting various types.",
    },
    labelText: {
      description: "Optional text label for the picker, can be null.",
      control: { type: "text" },
    },
    componentWidth: {
      description: "The width of the picker component",
      control: { type: "number" },
    },
    soundEffect: {
      description:
        'Optional sound effect to play when interacting with the picker; can be "pop" or "click".',
      control: { type: "select", options: ["pop", "click"] },
    },
    initialValue: {
      description:
        "Optional initial value of the picker, can be null. If null, the picker will start at the top of the list. The initial value is the index of the selected item. Note: The initial value is 1-indexed, so if the first item is selected, the initial value should be 1.",
      control: { type: "number" },
    },
    containerClassName: {
      description:
        "Optional TailwindCSS class name for the container of the picker.",
      control: { type: "text" },
    },
    labelClassName: {
      description:
        "Optional TailwindCSS class name for the label of the picker.",
      control: { type: "text" },
    },
    options: {
      description:
        "Array of options available for selection within the picker, can be strings or numbers.",
    },
    initialItemLabel: {
      description:
        "Optional initial label for the selected item, can be any type or null. If null, the picker will take the first item in the options array as the initial label. Else, the picker will take the initialItemLabel as the initial label.",
      control: { type: "text" },
    },
    itemClassName: {
      description:
        "Optional TailwindCSS class name for the options of the picker.",
      control: { type: "text" },
    },
    isMuted: {
      description: "Optional boolean to mute the sound effect of the picker.",
      control: { type: "boolean" },
      defaultValue: true,
    },
    ObserverClassName: {
      description:
        "Optional TailwindCSS class name for the observer of the picker.",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Picker>;

export const Default: Story = {
  args: {
    componentWidth: 65,
    visibleItems: 2,
    soundEffect: "pop",
    options: ["Next", "React", "Node", "Vue", "Angular"],
    onValueChange: (value) => console.log(value),
    scrollVelocity: 2,
    initialItemLabel: "Choose",
    itemClassName: "text-black dark:text-white",
    containerClassName: "mt-10",
  },
};

export const Custom: Story = {
  args: {
    componentWidth: 200,
    visibleItems: 3,
    labelText: "Project",
    soundEffect: "click",
    options: ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"],
    onValueChange: (value) => console.log(value),
    scrollVelocity: 2,
    initialItemLabel: "Choose",
    isMuted: false,
    containerClassName: "mt-10",
    labelClassName: "text-black",
    itemClassName: "text-black dark:text-white",
  },
};
