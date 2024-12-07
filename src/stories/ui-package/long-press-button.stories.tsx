import LongPressButton from "@/components/library/long-press-button";
import type { Meta, StoryObj } from "@storybook/react";
import { MousePointerClick } from "lucide-react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LongPressButton> = {
  component: LongPressButton,
  parameters: {
    layout: "centered", // Centers the component in the Storybook Canvas
  },
  tags: ["autodocs"],
  title: "LongPressButton",
  argTypes: {
    onPress: {
      description:
        "Function to execute when the button is pressed or long-pressed.",
      action: "pressed", // Simulates action logging in Storybook
    },
    onPressArgs: {
      description:
        "Arguments passed to the `onPress` function. It can be an array of strings, numbers, or boolean values.",
    },
    delay: {
      description: "Delay between each press action in milliseconds.",
      control: { type: "number" },
      defaultValue: 10,
    },
    timeOutDuration: {
      description:
        "Total duration (in milliseconds) before which the button starts responding.",
      control: { type: "number" },
      defaultValue: 200,
    },
    className: {
      description: "TailwindCSS class for customizing the button's appearance.",
      control: { type: "text" },
    },
    children: {
      description: "The content displayed inside the button.",
      control: { type: "text" },
    },
    disabled: {
      description: "Disable the button from being pressed or long-pressed.",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LongPressButton>;

export const Default: Story = {
  args: {
    onPress: () => console.log("Button pressed!"),
    onPressArgs: ["decrement"],
    delay: 100,
    timeOutDuration: 200,
    className:
      "p-2 rounded-md text-white font-semibold text-lg bg-green-500 hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 shadow-lg",
    children: "Decrement",
  },
};

const CustomButton = () => {
  return (
    <div className="flex justify-center items-center w-full h-full space-x-2">
      <MousePointerClick />
      <p>Custom Button</p>
    </div>
  );
};

export const CustomStyle: Story = {
  args: {
    onPress: () => console.log("Custom button pressed!"),
    onPressArgs: ["arg1", "arg2"],
    delay: 150,
    timeOutDuration: 300,
    className:
      "p-4 rounded-lg bg-red-500 hover:bg-red-700 shadow-lg text-white text-xl font-semibold",
    children: <CustomButton />,
  },
};
