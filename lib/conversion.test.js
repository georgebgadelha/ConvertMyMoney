const conversion = require('./conversion')

test('Convert fxrate 4 and 4', () => {
    expect(conversion.convert(4,4)).toBe(16)
})

test('Convert fxrate 0 and 4', () => {
    expect(conversion.convert(0,4)).toBe(0)
})

test('Convert fxrate 4 and 0', () => {
    expect(conversion.convert(4,0)).toBe(0)
})

test('toMoney converts 2 to float number 2.00', () => {
    expect(conversion.toMoney(2, 2)).toBe('2.00')
})

test('toMoney converts integer 2 to float number 2.00', () => {
    expect(conversion.toMoney(2)).toBe('2.00')
})

test('toMoney converts string 2 to float number 2.0', () => {
    expect(conversion.toMoney('2')).toBe('2.00')
})