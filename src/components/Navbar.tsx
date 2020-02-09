import React from 'react';
import Link from 'next/link';
import { Container } from '../styles/GlobalStyles';
import { StyledNavbar } from '../styles/StyledNavbar';

const Navbar: React.FC<{}> = () => {
  return (
    <StyledNavbar>
      <Container>
        <ul>
          <li>
            <Link href="/">
              <a className="brand">👮 Border Police</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/license">
              <a>License</a>
            </Link>
          </li>
          <div className="pull-right">
            <li>
              <a
                href="https://github.com/umutcanbolat/border-police"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </div>
        </ul>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
