// Purpose: make CI fail on purpose for the assignment
describe('CI Part 1 deliberate failure', () => {
  it('fails on purpose', () => {
    expect(1 + 1).toBe(3); // wrong on purpose
  });
});