import React from "react";
import {Popup} from './'

export default {
    title: 'Popup',
    component: Popup,
    argTypes: {
        label: {
            description: '...',
        }
    }
}

const Template = args => <Popup {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    options: [
        {
            label: 'option 1',
            color: 'green'
        },
        {
            label: 'option 2',
            color: 'red'
        },
        {
            label: 'option 1',
        },
        {
            label: 'option 2',
        }
    ],
    width: '200px',
    visibility: {
        visiblePopup: true,
        setVisiblePopup: () => {

        }
    }
}



