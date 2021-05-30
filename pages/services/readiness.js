import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Button from '../../components/Button';
import styled from 'styled-components';

const readiness = () => {
  return (
    <ServicePage>
      <header>
        <div className="container">
          <h1>POPIA & GDPR Regulatory Readiness</h1>
        </div>
      </header>
      <div className="container">
        <Grid>
          <div>
            <h2>Data Privacy Readiness Gap Analysis & Preparation</h2>
            <h3>
              Are you meeting your regulatory obligations and can you leverage
              legislative compliance as a competitive advantage?
            </h3>
            <p>
              Evaluation to not only determine your current preparedness or
              exposure but to also help you close your gaps to ensure that
              you’re ready and in compliance to your applicable legislation
            </p>
          </div>
          <div>
            <h2>Information Risk Maturity Assessments</h2>
            <h3>
              How mature is your ability to manage your Information Risk
              Management?
            </h3>
            <p>
              We will benchmark your maturity and customise a programme to
              improve your ability to oversee and control your key information
              risks.
            </p>
          </div>
        </Grid>
        <Link href="/services">
          <Button>Back To Services</Button>
        </Link>
      </div>
    </ServicePage>
  );
};

const ServicePage = styled.div`
  width: 100%;

  .container {
  }

  header {
    height: 45vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding-bottom: 5rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('/images/banner2.jpg');

    h1 {
      font-size: var(--mainHeading);
    }
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;
  /* min-height: 50vh; */
  margin-top: var(--verticalSpace);
  margin-bottom: var(--verticalSpace);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  div {
    width: 100%;
    padding: 3rem;
    background-color: #eef0f4;
    box-shadow: 9.91px 9.91px 5px #d9dade;
    border-radius: 10px;

    h2 {
      font-size: 2.5rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 400;
      /* width: 75%; */
      margin-bottom: 2rem;
      color: var(--primary);
    }

    p {
      font-size: 1.4rem;
      color: var(--primary);
      margin-bottom: 1rem;
    }
  }
`;

export default readiness;
