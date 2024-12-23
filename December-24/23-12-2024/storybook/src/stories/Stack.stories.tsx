import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Stack from "../components/Stack";

type StoryProps = ComponentProps<typeof Stack> & { numberOfChildren: number };

const meta: Meta<StoryProps> = {
  component: Stack,
  tags:['autodocs'],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
    numberOfChildren: {
      options: [1, 5, 10],
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<StoryProps>;


export const Horizontal: Story = {
  args: {
    numberOfChildren: 5,
    orientation: "horizontal",
  },
  render({ numberOfChildren, ...args }) {
    return (
      <Stack {...args}>
        {createChildren(numberOfChildren)}
      </Stack>
    );
  },
};

export const Vertical: Story = {
    args: {
      numberOfChildren: 5,
      orientation: "vertical",
    },
    render({ numberOfChildren, ...args }) {
      return (
        <Stack {...args}>
          {createChildren(numberOfChildren)}
        </Stack>
      );
    },
  };

function createChildren(numberOfChildren: number) {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, iterator) => {
        return (
            <div
                key={iterator}
                style={{width:100, height:100, backgroundColor:'red'}}></div>
        )
    })
}

// export const Vertical: Story = {
//   args: {
//     numberOfChildren: 5,
//     orientation: "vertical",
//   },
//   render({ numberOfChildren, ...args }) {
//     return (
//       <Stack {...args}>
//         {Array.from({ length: numberOfChildren }, (_, i) => (
//           <div
//             key={i}
//             style={{
//               width: 100,
//               height: 100,
//               backgroundColor: "lightblue",
//             }}
//           />
//         ))}
//       </Stack>
//     );
//   },
// };