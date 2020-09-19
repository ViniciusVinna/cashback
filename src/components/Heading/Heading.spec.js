import React from 'react';
import Heading from './Heading';

describe('Heading', () => {
  it('it should render the h1 html element by default', () => {
    const { container } = render(<Heading>Heading 1 Title</Heading>);

    expect(container).toMatchSnapshot();
  });

  it('it should render the h2 html element by default', () => {
    const { container } = render(
      <Heading level="h2">Heading 2 Title</Heading>
    );

    expect(container).toMatchSnapshot();
  });

  it('it should render the h3 html element by default', () => {
    const { container } = render(
      <Heading level="h3">Heading 3 Title</Heading>
    );

    expect(container).toMatchSnapshot();
  });

  it('it should render the h4 html element by default', () => {
    const { container } = render(
      <Heading level="h4">Heading 4 Title</Heading>
    );

    expect(container).toMatchSnapshot();
  });

  it('it should render the h5 html element by default', () => {
    const { container } = render(
      <Heading level="h5">Heading 5 Title</Heading>
    );

    expect(container).toMatchSnapshot();
  });

  it('it should render the h6 html element by default', () => {
    const { container } = render(
      <Heading level="h6">Heading 6 Title</Heading>
    );

    expect(container).toMatchSnapshot();
  });
});
