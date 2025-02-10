import type { Meta, StoryObj } from '@storybook/react'
import { PlayerCourse } from './'

const meta: Meta<typeof PlayerCourse> = {
  title: 'Components/PlayerCourse',
  component: PlayerCourse,
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do vídeo exibido no player.'
    },
    url: {
      control: 'text',
      description: 'URL do vídeo a ser carregado no player.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente `PlayerCourse` que exibe um player de vídeo usando `ReactPlayer` com suporte a carregamento de capa e fallback de loading.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof PlayerCourse>;

export const Default: Story = {
  args: {
    title: 'Aula 1: Introdução ao Next.js',
    url: 'https://www.youtube.com/embed/QhBnZ6NPOY0'
  }
}
