// Button.stories.tsx
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from '../Button/index'
import { ButtonStyle } from '../Button/styles'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

// Defina o tipo de args como ButtonProps
const Template: Story<ButtonProps> = (args) => <ButtonStyle {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  children: 'Button Text',
}
