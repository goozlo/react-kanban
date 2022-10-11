import React from 'react';
import {EditMenu} from '.';
import {Provider} from "react-redux";
import store from "@store/store";

export default {
  title: 'EditMenu',
  component: EditMenu,
  argTypes: {
    label: {
      description: '...',
    },
  },
  decorators: [
    (Story) => (
        <div style={{position: "relative"}}>
          <Story/>
        </div>
    )
  ]
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <EditMenu {...args} />;

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
  show: true
};
