import { Meta, Story } from '@storybook/react'
import { Header, HeaderProps } from '../header'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  navLinks: [
    { title: 'Home', href: '#' },
    { title: 'Service', href: '#' },
    { title: 'Feature', href: '#' },
    { title: 'Product', href: '#' },
    { title: 'Testimonial', href: '#' },
    { title: 'FAQ', href: '#' },
  ],
}
