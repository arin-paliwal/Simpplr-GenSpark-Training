import { ComponentProps } from "react";
import { Button } from "../components/Button";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
type StoryProps = ComponentProps<typeof Button> & { buttonText: string };

const meta: Meta<StoryProps> = {
  component: Button,
  tags:['autodocs'],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Test Button Primary",
    variant: "primary",
    size: "md",
  },
  render({ buttonText, ...args }) {
    return <Button {...args}>{buttonText}</Button>;
  },
};


export const Secondary: Story = {
  args: {
    buttonText: "Test Button Secondary",
    variant: "secondary",
    size: "md",
  },
  render({ buttonText, ...args }) {
    return <Button {...args}>{buttonText}</Button>;
  },
};
