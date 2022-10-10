import React from 'react';
import { Accordion } from '.';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    label: {
      description: '...',
    },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      label: 'option 1',
      color: 'green',
    },
    {
      label: 'option 2',
      color: 'red',
    },
    {
      label: 'option 1',
    },
    {
      label: 'option 2',
    },
  ],
  width: '200px',
  visibility: {
    visiblePopup: true,
    setVisiblePopup: () => {},
  },
};
