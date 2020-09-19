const { store, persistor } = require.requireActual('./index');

describe('store', () => {
  it('should have a store', () => {
    const { app } = store.getState();

    expect(app).toBeTruthy();
  });

  it('should have a persistor', () => {
    expect(persistor.getState()).toEqual({
      bootstrapped: true,
      registry: [],
    });
  });
});
