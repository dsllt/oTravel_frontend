import '@testing-library/jest-dom'
import { HeroContainer } from '../hero-container'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}))

jest.mock('use-debounce', () => ({
  useDebouncedCallback: jest.fn((fn) => fn),
}))

describe('HeroContainer', () => {
  const mockReplace = jest.fn()
  const mockUseRouter = useRouter as jest.Mock

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      replace: mockReplace,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
  it('renders the component', () => {
    render(<HeroContainer />)

    expect(
      screen.getByText('Encontre o próximo lugar que vai te encantar')
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Descubra restaurantes e cafés com ambientes perfeitos perto de você com apenas alguns cliques.'
      )
    ).toBeInTheDocument()
  })
  it('renders the search input component', () => {
    render(<HeroContainer />)

    expect(screen.getByText('Para onde você vai?')).toBeInTheDocument()
    expect(
      screen.getByText('Que tipo de lugar você busca?')
    ).toBeInTheDocument()
  })
})
