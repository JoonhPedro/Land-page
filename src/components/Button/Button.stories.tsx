import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './index'
import { ButtonStyle } from './styles'

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
