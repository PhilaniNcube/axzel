import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
      </Head>

      <Wrapper>
        <Header>
          <div className="container">
            <div className="imgBox"></div>
            <div className="text">
              <h2>Get In Touch</h2>
              <p>
                Feel free to call us in order to discuss the need of your
                business.
              </p>
              <a href="mailto:kenc@axzel.co.za">
                <span>Email:</span>kenc@axzel.co.za
              </a>
              <a href="https://wa.me/27647689728" target="_blank">
                <span>WhatsApp:</span>
                +27 064 768 9728
              </a>
            </div>
          </div>
        </Header>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  &::after {
    content: 'Contact Us';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--watermark);
    line-height: 1;
    text-transform: uppercase;
    font-weight: 900;
    opacity: 0.08;
    pointer-events: none;
  }

  .container {
    padding-top: 18rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    .text {
      h2 {
        font-size: var(--mainHeading);
        font-weight: 900;
        text-transform: uppercase;
        color: var(--dark);
      }

      p {
        font-size: 2.2rem;
        color: var(--dark);
        line-height: 1;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      a {
        display: block;
        font-size: 2rem;
        cursor: pointer;
        color: var(--dark);

        span {
          padding-right: 0.7rem;
          color: var(--primary);
        }
      }
    }

    .contact-links {
      display: flex;
      height: 8rem;
      align-items: center;
      margin-bottom: 2rem;

      h3 {
        font-size: var(--subHeading);
        color: var(--primary);
        margin-right: var(--verticalSpace);
      }

      a {
        font-size: var(--subHeading);
      }
    }

    .cta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h1 {
        font-size: var(--mainHeading);
        margin-bottom: var(--verticalSpace);
      }
    }
  }
`;

export default contact;

<div className="cta">
  <h1>Contact Us</h1>
  <div className="contact-links">
    <h3>
      <FaEnvelope />
    </h3>
    <a href="mailto:kenc@axzel.co.za">kenc@axzel.co.za</a>
  </div>
  <div className="contact-links">
    <h3>
      <FaWhatsapp />
    </h3>
    <a href="https://wa.me/27647689728" target="_blank">
      +27 064 768 9728
    </a>
  </div>
</div>;
