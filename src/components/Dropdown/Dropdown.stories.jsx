import React from 'react';
import { Dropdown } from '.';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    data: {
      description: '...',
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    label: 'Current Status',
    options: [
      {
        id: 0,
        label: 'Todo',
        value: 'Todo',
      },
      {
        id: 1,
        label: 'Doing',
        value: 'Doing',
      },
      {
        id: 2,
        label: 'Done',
        value: 'Done',
      },
    ],
  },
};
