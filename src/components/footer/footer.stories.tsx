import type { Meta, StoryObj } from '@storybook/react'
import Footer from './'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    year: {
      control: 'number',
      description: 'Ano a ser exibido no footer.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente `Footer` que exibe o ano atual.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Footer>;
const year = new Date().getFullYear()

export const Default: Story = {
  args: {
    year
  }
}
