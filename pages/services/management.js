import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const management = () => {
  return (
    <ServicePage>
      <header>
        <div className="container">
          <h1>Data Culture Transformation</h1>
        </div>
      </header>
      <div className="container">
        <Grid>
          <div>
            <h2>Cultural Transformation</h2>
            <h3>
              When you win their hearts, you win their minds and only then do
              you truly transform your organisation.
            </h3>
            <p>
              We will design and conduct information management training and
              awareness programmes customised for all levels of your enterprise.
            </p>
            <p>
              Transforming enterprise culture ensures programme sustainability
              and a better return on your investment.
            </p>
          </div>
          <div>
            <h2>Creation & Review of Governance Frameworks and Policies</h2>
            <h3>
              A sound policy framework is at the heart of sustainable and
              scalable data protection and information risk management.
            </h3>
            <p>
              We co-create a foundation for sustainable governance and oversight
              through custom frameworks and policies.
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

export default management;
