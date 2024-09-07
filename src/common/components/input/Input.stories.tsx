import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "ui/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  name: "Input",
  args: {},
};
