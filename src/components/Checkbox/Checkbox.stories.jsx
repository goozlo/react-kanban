import React from "react";
import {Checkbox} from './'

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            description: 'Строка, описывающая соглашение на которое влияет checkbox',
        }
    }
}

const Template = args => <Checkbox {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    label: 'label wasn\'t provided'
}



