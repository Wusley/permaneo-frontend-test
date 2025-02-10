import type { Meta, StoryObj } from '@storybook/react'
import { DetailCourse } from './'

const meta: Meta<typeof DetailCourse> = {
  title: 'Components/DetailCourse',
  component: DetailCourse,
  argTypes: {
    id: {
      control: 'number',
      description: 'ID do curso.'
    },
    title: {
      control: 'text',
      description: 'Título do curso.'
    },
    description: {
      control: 'text',
      description: 'Descrição do curso.'
    },
    price: {
      control: 'number',
      description: 'Preço do curso.'
    },
    startAt: {
      control: 'text',
      description: 'Data de início do curso no formato YYYY-MM-DD.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente `DetailCourse` que exibe informações detalhadas sobre um curso, incluindo título, descrição, preço, data de início e botão de inscrição.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof DetailCourse>;

export const Default: Story = {
  args: {
    id: 1,
    title: 'Curso de JavaScript Avançado',
    description: 'Aprenda JavaScript avançado com este curso completo e detalhado.',
    price: 299.99,
    startAt: '2025-01-20'
  }
}
