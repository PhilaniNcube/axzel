import Image from 'next/image';
import React, { Fragment } from 'react';
import styled from 'styled-components';

const Popi = () => {
  return (
    <Fragment>
      <Wrapper>
        <div className="container">
          <h3>POPI ACT</h3>
          <h2>ARE YOU READY?</h2>

          <Assessment>
            <div className="questions">
              <h4>Governance</h4>
              <ul>
                <li>Have you appointed an Information Officer?</li>
                <li>
                  At which management forum do you make descisions pertaining to
                  information?
                </li>
              </ul>
              <h4>Data Management</h4>
              <ul>
                <li>What data are you holding and who owns it?</li>
                <li>Where is the data stored?</li>
                <li>How do you measure the quality of your data</li>
                <li>What processing do 3rd parties do on your behalf?</li>
                <li>What protection meaures are inplace for your data?</li>
                <li>
                  Have you defined guidlines on the retention and destruction of
                  data in line with legislation?
                </li>
                <li>Does any of your data flow across borders?</li>
                <li>
                  What is your data privacy breach and incident response
                  process?
                </li>
                <li>
                  What processes have you put in place for the handling of
                  customer data access requests?
                </li>
              </ul>
              <h4>Customer Consent & Preference Management</h4>
              <ul>
                <li>For what purpose have you collected this data?</li>
                <li>Where do you capture customer consent and preferences?</li>
                <li>
                  Where and how do you store customer consent and preferences?
                </li>
              </ul>
              <h4>Training & Awareness</h4>
              <ul>
                <li>Do you have an Information Management policy in place?</li>
                <li>
                  What have you put in place to ensure staff are aware of their
                  responsibilities around handling customer data?
                </li>
              </ul>
            </div>
            <Image src="/images/data-center.jpg" width={6000} height={4000} />
          </Assessment>
        </div>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.section`
  width: 100%;

  .container {
    h3 {
      text-transform: uppercase;
      text-align: center;
      font-size: var(--subHeading);
      letter-spacing: 2px;
      color: var(--primary);
      font-weight: 400;
    }

    h2 {
      font-size: var(--mainHeading);
      text-align: center;
      font-weight: 900;
      margin: 0.2em auto;
    }
  }
`;

const Assessment = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 7fr;
  margin-bottom: var(--verticalSpace);

  .questions {
    width: 85%;

    h4 {
      font-size: 2.2rem;
      margin-bottom: 0.4em;
      margin-top: 1.5em;
    }

    ul {
      width: 100%;

      li {
        font-size: 1.3rem;
        line-height: 1.5;
        color: var(--primary);
      }
    }
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default Popi;
