import type { Meta, StoryObj } from '@storybook/react'
import { CardCourse } from './'
import { Course } from '@/redux/features/course/@types'

const meta: Meta<typeof CardCourse> = {
  title: 'Components/CardCourse',
  component: CardCourse,
  argTypes: {
    course: {
      control: { disable: true },
      description: 'Informações do curso a serem exibidas no card.'
    },
    isCourseActive: {
      control: 'boolean',
      description: 'Define se o curso está ativo ou não, alterando o estilo do card.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente `CardCourse` que exibe informações sobre um curso, incluindo título, descrição e botão call-to-action de inscrição ou acesso ao curso.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CardCourse>;

const exampleCourse: Course = {
  id: 1,
  title: 'Curso de Next.js',
  price: 100,
  description: 'Aprenda Next.js do zero ao avançado.',
  thumbnail: 'https://via.placeholder.com/150',
  startAt: '2022-10-01T00:00:00.000Z',
  created_at: '2021-10-01T00:00:00.000Z',
  url: 'https://www.youtube.com/embed/QhBnZ6NPOY0'
}

export const Default: Story = {
  args: {
    course: exampleCourse,
    isCourseActive: false
  }
}

export const ActiveCourse: Story = {
  args: {
    course: exampleCourse,
    isCourseActive: true
  }
}
