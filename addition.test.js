const [addition, substraction, multiplication, division] = require('./index');
 
test('addition 1 + 2 to equal 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('substraction 2 - 1 to equal 1', () => {
    expect(substraction(2, 1)).toBe(1);
  });

test('multiplication 2 * 2 to equal 4', () => {
expect(multiplication(2, 2)).toBe(4);
});

test('division 6 / 2 to equal 3', () => {
expect(division(6, 2)).toBe(3);
});