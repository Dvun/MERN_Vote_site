import {render, screen} from '@testing-library/react'
import Chart from './Chart'


describe('Fetch statistic from server', () => {
  test('render statistics if request succeeds', async () => {
    render(<Chart/>)
    const divElement = await screen.findAllByRole('div')
    expect(divElement).not.toHaveLength(0)
  })
})