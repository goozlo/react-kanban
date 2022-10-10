import React from 'react';
import { TextField } from '.';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    label: {
      description: '...',
    },
  },
};

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'task name',
  placeholder: 'Enter task name',
  type: 'text',
  width: '350px',
};
