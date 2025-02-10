import type { Meta, StoryObj } from '@storybook/react'
import { BoxTextInfo } from '.'

const meta: Meta<typeof BoxTextInfo> = {
  title: 'Components/BoxTextInfo',
  component: BoxTextInfo,
  argTypes: {
    text: { control: 'text', description: 'Texto a ser exibido no centro da caixa.' },
    size: { 
      control: { type: 'select' },
      options: [ 'sm', 'md', 'lg' ],
      description: 'Tamanho da fonte do texto.' 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente `BoxTextInfo` que exibe um texto centralizado com tamanhos de fonte customizável.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof BoxTextInfo>

export const Default: Story = {
  args: {
    text: 'Este é um texto informativo.'
  }
}

export const SmallText: Story = {
  args: {
    text: 'Este é um texto tamanho pequeno.',
    size: 'sm'
  }
}

export const MediumText: Story = {
  args: {
    text: 'Este é um texto tamanho médio.',
    size: 'md'
  }
}

export const LargeText: Story = {
  args: {
    text: 'Este é um texto tamanho grande.',
    size: 'lg'
  }
}
