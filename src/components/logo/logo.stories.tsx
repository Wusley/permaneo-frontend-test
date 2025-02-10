import type { Meta, StoryObj } from '@storybook/react'
import Logo from './'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Componente `Logo` que exibe o ícone e o texto da marca com um link para a página inicial.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Logo>;

export const Default: Story = {}
