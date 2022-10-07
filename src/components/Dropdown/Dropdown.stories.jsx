import React from "react";
import {Dropdown} from './'

export default {
    title: 'Dropdown',
    component: Dropdown,
    // argTypes: {
    //     label: {
    //         description: 'Строка, описывающая соглашение на которое влияет checkbox',
    //     }
    // }
}

const Template = args => <Dropdown {...args}/>

export const Primary = Template.bind({})
// Primary.args = {
//     label: 'label wasn\'t provided'
// }



