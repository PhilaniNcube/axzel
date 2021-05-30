import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const date = new Date();

  return (
    <FooterWrapper>
      <div className="container">
        <div className="connected">
          <h4>Stay Connected</h4>
          <div className="socials">
            <Link href="https://www.linkedin.com/company/71704691/admin/">
              <a>
                <FaLinkedinIn />
              </a>
            </Link>
          </div>
        </div>
        <div className="text">
          <h4>Commited to Work</h4>
          <article>
            Effective management of customer data is a significant undertaking
            and at Axzel Advisory we are confident that we will become your
            trusted advisors in all matters Data Governance.
          </article>
        </div>
        <div className="navigate">
          <h4>Navigate</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>

            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p>
          &copy; Copyright {`${date.getFullYear()}`} Designed by{' '}
          <span>
            {' '}
            <a href="https://athenamedia.co.za">Athena Media</a>
          </span>
        </p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--dark);
  color: #fff;
  font-size: 1rem;
  padding-top: var(--verticalSpace);
  padding-bottom: var(--verticalSpace);

  .copy {
    text-align: center;
    padding-top: 1em;

    a {
      cursor: pointer;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
    padding-bottom: 1em;
    border-bottom: 1px solid #4c4c4c;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    h4 {
      font-size: 1.8em;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    article {
      max-width: 200px;
    }

    .connected {
      width: 100%;

      .socials {
        display: flex;
        font-size: 1.8em;

        a {
          padding-right: 0.5em;

          &:hover {
            color: var(--primary);
          }
        }
      }
    }

    .navigate {
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 1.3em;
        color: #ebd4cd;

        li:hover {
          color: #fff;
        }
      }
    }
  }
`;

export default Footer;
