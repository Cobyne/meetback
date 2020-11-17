import { pxToRem, rem } from '.'

describe('layout', () => {
  it('Should return rem from pixel', () => {
    const pixels = 100

    const result = pxToRem(pixels)
    expect(result).toBe(6)
  })

  it('Should return rem with prexix', () => {
    const rems = 10

    const result = rem(rems)
    expect(result).toBe(`${rems}rem`)
  })
})
