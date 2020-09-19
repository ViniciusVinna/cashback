import { getViewportSize } from './viewport';

describe('Viewport', () => {
  it('it should return the "small" token', () => {
    global.innerWidth = 480;
    const screenSize = getViewportSize();

    expect(screenSize).toBe('small');
  });

  it('it should return the "medium" token', () => {
    global.innerWidth = 768;
    const screenSize = getViewportSize();

    expect(screenSize).toBe('medium');
  });

  it('it should return the "large" token', () => {
    global.innerWidth = 1025;
    const screenSize = getViewportSize();

    expect(screenSize).toBe('large');
  });

  it('it should return the "x-large" token', () => {
    global.innerWidth = 1281;
    const screenSize = getViewportSize();

    expect(screenSize).toBe('x-large');
  });

  it('it should return the "xx-large" token', () => {
    global.innerWidth = 1441;
    const screenSize = getViewportSize();

    expect(screenSize).toBe('xx-large');
  });
});
