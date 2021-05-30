import { render, screen } from '@testing-library/react';
import App, { sum } from './App';
import Logo from '../src/features/Main/Logo/Logo';
import Main from '../src/features/Main/Main';
import About from '../src/features/About/About';
import Contact from '../src/features/Contact/Contact';
import Footer from '../src/features/Footer/Footer';
import Layout from '../src/features/Layout/Layout';
import Projects from '../src/features/Projects/Projects';
import Summary from '../src/features/Summary/Summray';
import componentWrapper from './utils/componentWrapper';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  render(<Logo></Logo>)
  render(<Main></Main>)
  render(<About></About>)
  render(<Contact></Contact>)
  render(<Footer></Footer>)
  render(<Layout></Layout>)
  render(<Projects></Projects>)
  render(<Summary></Summary>)
  expect(sum(1, 2)).toBe(3);
  const f = (
    <>
    <Logo css={true}></Logo>
    <About></About>
    <Footer></Footer>
    </>
  )
  expect(componentWrapper(About, true)).toStrictEqual(f)
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});