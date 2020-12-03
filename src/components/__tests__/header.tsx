import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../header';
import * as Gatsby from 'gatsby';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        author: 'Bernd / Matze',
        description: 'Mock of SEO',
        title: 'Porsche Design System in Gatsby',
      },
    },
  }));
});

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header siteTitle="Porsche Design System in Gatsby" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
