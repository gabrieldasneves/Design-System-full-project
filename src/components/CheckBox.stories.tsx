import {Meta, StoryObj} from '@storybook/react';
import {Checkbox, CheckBoxProps} from './CheckBox'
import {Text} from './Text'

export default {
    title:'Components/Checkbox',
    component: Checkbox,
   args: {},
   argTypes:{},
   decorators:[
    (Story) => {
        return(
            <div className='flex items-center gap-2'>
                <div>{Story()}</div>
                <Text size='sm'>Lembrar de mim por trinta dias</Text>
            </div>


        )
    }
   ]
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
