import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from '../Button/index'
import { ButtonStyle } from '../Button/styles'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <ButtonStyle {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  children: 'Button Text',
}
