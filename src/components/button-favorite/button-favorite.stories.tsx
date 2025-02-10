import type { Meta, StoryObj } from '@storybook/react'
import { ButtonFavorite } from '.'

const meta: Meta<typeof ButtonFavorite> = {
  title: 'Components/ButtonFavorite',
  component: ButtonFavorite,
  argTypes: {
    id: {
      control: { type: 'number' },
      description: 'ID do curso a ser favoritado.'
    },
    isCourseFavorite: {
      control: 'boolean',
      description: 'Define se o curso está favoritado ou não, alterando o ícone do botão.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente `ButtonFavorite` que permite favoritar ou desfavoritar um curso com um ícone de coração.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof ButtonFavorite>;

export const Default: Story = {
  args: {
    id: 1,
    isCourseFavorite: false
  }
}

export const Favorited: Story = {
  args: {
    id: 1,
    isCourseFavorite: true
  }
}
