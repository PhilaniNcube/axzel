import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  GiTrafficLightsGreen,
  GiCombinationLock,
  GiThreeFriends,
} from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';

const index = () => {
  return (
    <Fragment>
      <ServicesHeader>
        <div className="container">
          <h1>Our Services</h1>
        </div>
      </ServicesHeader>
      <ServicesCards>
        <div className="container">
          <div className="cards">
            <div className="card">
              <h4>POPIA & GDPR Regulatory Readiness</h4>
              <ul>
                <li>
                  We will provide tailored POPIA and GDPR Readiness advice and
                  support on your journey
                </li>
              </ul>
              <div className="icon">
                <GiTrafficLightsGreen />
              </div>
              <Link href="/services/readiness">
                <a>Learn More</a>
              </Link>
            </div>
            <div className="card">
              <h4>End To End Data Protection</h4>
              <ul>
                <li>
                  We will structure and drive the implementation of enterprise
                  Data Protection programmes including technical guidance and
                  policy frameworks
                </li>
              </ul>
              <div className="icon">
                <GiCombinationLock />
              </div>
              <Link href="/services/data">
                <a>Learn More</a>
              </Link>
            </div>
            <div className="card">
              <h4>Data Culture Transformation</h4>
              <ul>
                <li>
                  We will structure training interventions and awareness to win
                  your workforce’s hearts and minds
                </li>
              </ul>
              <div className="icon">
                <GiThreeFriends />
              </div>
              <Link href="/services/management">
                <a>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </ServicesCards>
      <Brand>
        <div className="container">
          <h2>In the new digital age your data is invaluable.</h2>
          <p>
            With international hands on experience in advising clients across
            multiple industry sectors we are well placed to support your journey
            no matter how big or small.
          </p>
        </div>
      </Brand>
    </Fragment>
  );
};

const ServicesHeader = styled.header`
  width: 100%;
  height: 60vh;
  background-color: var(--primary);
  background-blend-mode: multiply;
  background-image: url('/images/services.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: var(--verticalSpace);

  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: #fff;
      font-size: var(--mainHeading);
      text-transform: uppercase;
      letter-spacing: 5px;
      font-weight: 900;
    }
  }
`;

const ServicesCards = styled.div`
  margin-bottom: var(--verticalSpace);
  margin-top: var(--verticalSpace);
  width: 100%;

  .container {
    .cards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 2em;
      gap: 1em;

      .card {
        min-width: 290px;
        width: 330px;
        text-align: center;
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        padding: 2em 3.2em;
        justify-content: space-between;

        background: #eef0f4;
        border-radius: 5%;
        box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
        transition: all 0.3s;

        h4 {
          font-size: 2.8em;
          text-align: center;
          font-weight: 900;
          letter-spacing: 3px;
          color: var(--primary);
          margin-bottom: 1em;
          padding-top: 1.5em;
          text-transform: uppercase;
        }

        ul {
          font-size: 2.3em;
          line-height: 1.6;
          /* list-style-type: disc; */
          /* padding-left: 2rem; */
        }

        .icon {
          font-size: 5em;
          text-align: center;
        }

        a {
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 2.5em;
          padding-bottom: 2em;
          text-align: center;

          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
`;

const Brand = styled.div`
  width: 100%;
  /* min-height: 30vh; */
  display: grid;
  place-items: center;
  margin-top: var(--verticalSpace);
  margin-bottom: var(--verticalSpace);

  .container {
    text-align: center;
    height: 100%;

    h2 {
      font-size: var(--subHeading);
      letter-spacing: 5px;
      text-transform: uppercase;
    }

    p {
      font-size: 2.5em;
      /* margin-top: 0.5em; */
      max-width: 600px;
      text-align: center;
      margin: 0.5em auto;
    }
  }
`;

const Posts = styled.div`
  width: 100%;
  margin-bottom: var(--verticalSpace);

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .post {
      position: relative;
      width: 320px;
      height: 320px;
      margin: 15px;
      overflow: hidden;

      .imgBx,
      .contentBx {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .imgBx img,
      .imgBx > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .contentBx {
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
          position: relative;
          padding: 30px;
          z-index: 1;
          transition: 0.5s;
          transform: translateX(-300px);
          transition-delay: 0s;

          h3 {
            font-size: 2.5em;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          p {
            font-size: 2em;
            font-weight: 500;
          }
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          opacity: 0.85;
          transform: scaleX(0);
          transition: transform 0.5s ease-in-out;
          transform-origin: right;
          transition-delay: 0.5s;
        }
      }

      &:hover .contentBx .content {
        transform: translateX(0px);
        transition-delay: 0.5s;
      }

      &:hover .contentBx::before {
        transform: scaleX(1);
        transition: transform 0.5s ease-in-out;
        transform-origin: left;
        transition-delay: 0s;
      }
    }
  }
`;

export default index;
