import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const data = () => {
  return (
    <ServicePage>
      <header>
        <div className="container">
          <h1>End-to-End Data Protection</h1>
        </div>
      </header>
      <div className="container">
        <Grid>
          <div>
            <h2>Enterprise Data Protection Programme</h2>
            <h3>
              Are you comfortable that your critical information assets are well
              protected?
            </h3>
            <p>
              Design and coordinate an enterprise-wide programme to form data
              discovery all the way to prioritised protection and
              rationalisation.
            </p>
            <p>
              A priority=driven data protection programme based on the discovery
              and rationalisation of your organisation's critical data assets.
            </p>
          </div>
          <div>
            <h2>Data Breach Response Readiness</h2>
            <h3>
              Can you respond cohesively and efficiently in the event of a data
              breach?
            </h3>
            <p>
              Preparation of organisational resources using a hands-on approach
              to data breach preparedness.
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

export default data;
