import { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '../components/ToggleButton';

type StoryProps = {
  checked: boolean;
  onLabel?: string;
  offLabel?: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const meta: Meta<StoryProps> = {
  component: ToggleSwitch,
  title: 'Components/ToggleSwitch',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'The current state of the toggle switch',
    },
    onLabel: {
      control: { type: 'text' },
      description: 'Label to display when the switch is on',
    },
    offLabel: {
      control: { type: 'text' },
      description: 'Label to display when the switch is off',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the switch state changes',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the toggle switch when true',
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => (
    <ToggleSwitch
      {...args}
      disabled={args.disabled}
      onChange={(newChecked: boolean) => args.onChange(newChecked)}
    />
  ),
};

export const ToggleEnabledToggle: Story = {
  ...Template,
  args: {
    checked: true,
    onLabel: 'Enabled',
    offLabel: 'Disabled',
    disabled: false,
  },
};

export const ToggleDisabledToggle: Story = {
  ...Template,
  args: {
    checked: false,
    onLabel: 'Enabled',
    offLabel: 'Disabled',
    disabled: false,
  },
};

export const DisabledButton: Story = {
  ...Template,
  args: {
    checked: false,
    onLabel: 'Enabled',
    offLabel: 'Disabled',
    disabled: true,
  },
  parameters: {
    controls: { disabled: true },
  },
};
