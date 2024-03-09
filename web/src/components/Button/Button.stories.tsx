// Button.stories.tsx
import { Meta, Story } from '@storybook/react'
import Button from '../Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}
