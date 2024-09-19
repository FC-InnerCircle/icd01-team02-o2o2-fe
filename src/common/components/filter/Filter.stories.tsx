import Filter from './Filter';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Filter> = {
  title: 'ui/Filter',
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const FilterStory: Story = {
  name: 'Filter',
  args: {
    children: '버튼입니다.',
  },
};
