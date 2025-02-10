import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from './'

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    color: { control: 'color', description: 'Cor do componente de carregamento' },
    height: { control: 'text', description: 'Altura do container de carregamento' },
    marginY: { control: 'text', description: 'Margem vertical do container de carregamento' },
    size: { control: 'text', description: 'Tamanho do indicador de carregamento' }
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente de carregamento exibido com um indicador circular em diferentes tamanhos e cores.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Loading>

export const Default: Story = {}

export const CustomColorAndSize: Story = {
  args: {
    color: 'blue.500',
    height: '150px',
    marginY: '30px',
    size: '64px'
  }
}

export const SmallLoading: Story = {
  args: {
    color: 'red.300',
    height: '50px',
    size: '24px'
  }
}

export const LargeLoading: Story = {
  args: {
    color: 'purple.400',
    height: '200px',
    marginY: '40px',
    size: '80px'
  }
}
