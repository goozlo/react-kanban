import React from "react";
import {Checkbox} from './'

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            description: 'Строка, описывающая соглашение на которое влияет checkbox',
            defaultValue: 'label wasn\'t provided'
        },
        mode: {
            description: 'Тема внешнего вида приложения',
            defaultValue: 'dark'
        }
    }
}

const Template = arg => <Checkbox {...arg}/>

export const Primary = Template.bind({})




