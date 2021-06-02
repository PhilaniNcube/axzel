import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Head from 'next/head';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper
      style={{
        backgroundColor: scrollPosition > 200 ? '#002244' : 'transparent',
        color: scrollPosition > 200 ? '#fff' : '#002244',
        transition: '0.6s',
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <Logo>
          <img
            src="/images/axzel-logo-01.svg"
            alt="logo"
            style={{
              transform: scrollPosition > 200 ? ' scale(1.4)' : 'scale(1)',
              transition: '0.6s',
            }}
          />
        </Logo>

        <div className="toggle">
          <FaBars
            style={{
              color: scrollPosition > 200 ? '#fff' : '#002244',
              transition: '0.6s',
            }}
            onClick={() => {
              setActive(!active);
              console.log(active);
            }}
          />
        </div>

        <ul
          className={`menu ${active ? 'active' : ''}`}
          onClick={() => {
            setActive(!active);
            console.log(active);
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  );
};

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.1rem 0;
  /* max-width: 60%; */
  img {
    /* display: inline-block; */

    height: 100%;
    width: auto;
    /* object-fit: cover; */
    padding: 0.1rem 0;

    @media screen and (min-width: 1500px) {
      padding: 0.2rem 0;
    }
  }
`;

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  background: transparent;
  position: fixed;
  /* top: 0; */
  /* left: 0; */
  z-index: 1000;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    height: 100%;

    .toggle {
      font-size: 3.2rem;
      color: var(--dark);
      display: grid;
      place-items: center;
      cursor: pointer;
      z-index: 3000;
    }

    ul.menu {
      /* display: none; */
      color: white;
      height: 100%;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      width: 300px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      transform: translateX(300px);
      transition: all 0.5s ease-in-out;

      &.active {
        transform: translateX(0px);
        background-color: rgba(245, 245, 245, 0.8);
        box-shadow: -8px -4px 19px -6px rgba(0, 0, 0, 0.49);
        -webkit-box-shadow: -8px -4px 19px -6px rgba(0, 0, 0, 0.49);
        -moz-box-shadow: -8px -4px 19px -6px rgba(0, 0, 0, 0.49);
      }

      li {
        font-size: 2.2rem;
        padding: 0 0.5rem;
        cursor: pointer;
        color: var(--dark);

        &:hover {
          color: var(--primary);
        }
      }
    }
  }
`;

export default Navbar;
