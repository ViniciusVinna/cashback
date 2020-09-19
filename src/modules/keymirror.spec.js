import { keymirror } from './keymirror';

describe('Keymirror', () => {
  it('it should return the mirrored key', () => {
    const testConst = keymirror({
      TEST: undefined,
    });

    expect(testConst).toEqual({ TEST: 'TEST' });
  });

  it('it should the throwed error', () => {
    const testConst = ['TEST'];

    expect(() => {
      keymirror(testConst);
    }).toThrow('Keymirror(...): Argument must be an object.');
  });
});
