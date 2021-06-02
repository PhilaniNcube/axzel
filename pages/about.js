import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const about = () => {
  return (
    <Wrapper>
      <Head>
        <title>Axzel | About</title>
        <meta name="description" content="Data Governance made practical" />

        <meta
          name="keywords"
          content="data governance, data privacy, data protection"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header>
        <div className="container">
          <h1>About Us</h1>
        </div>
      </Header>
      <Main>
        <div className="container">
          <div className="grid"></div>
          <div className="text">
            <p>
              Data is at the centre of conversations from the factory floor to
              the boardroom. Organisations are either making money or losing
              money from data, or both! Meanwhile the consumers (data subject),
              who are the original data owners, continue to suffer untold losses
              due to some irresponsible and unethical data handling practices.
            </p>
            <p>
              Effective management of customer data is a significant undertaking
              and at Axzel Advisory we are confident that we will become your
              trusted advisors in all matters Data Governance.
            </p>
            <p>
              With international hands on experience in advising clients across
              multiple industry sectors we are well placed to support your
              journey no matter how big or small.
            </p>
          </div>
        </div>
      </Main>
      <Team>
        <div className="container">
          <h2>Meet The Team</h2>
          <div className="grid">
            <div className="team-text">
              <h3>Ken Chikwanha</h3>
              <p>Founder</p>
              <Link href="https://www.linkedin.com/company/71704691/admin/">
                <FaLinkedin className="link" />
              </Link>
            </div>
            <div className="imgBox">
              <Image src="/images/signing.jpg" width={1280} height={854} />
            </div>
          </div>
        </div>
      </Team>
    </Wrapper>
  );
};

const Team = styled.div`
  width: 100%;
  margin: var(--verticalSpace) 0;

  .container {
    h2 {
      font-size: var(--subHeading);
      margin-bottom: var(--verticalSpace);
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      .team-text {
        width: 100%;

        .link {
          font-size: 3rem;
          color: var(--primary);
          margin-top: 0.3rem;
        }

        h3 {
          font-size: 2.2rem;
          margin-bottom: 0.8rem;
        }

        p {
          font-size: 1.8rem;
          color: var(--primary);
        }
      }

      .imgBox {
        height: 100%;
        width: 100%;

        div {
          width: 100%;

          img {
            object-fit: cover;
          }
        }
      }

      @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;

const Main = styled.div`
  width: 100%;
  margin: var(--verticalSpace) 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      .grid-item {
        display: flex;

        align-items: flex-start;

        h3 {
          font-size: 1.7rem;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 1px;
          color: var(--primary);
        }
      }
    }

    .text {
      font-size: 1.8rem;

      p {
        margin-bottom: 2rem;
      }
    }
  }
`;

const Header = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  background-image: url('/images/johannesburg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: var(--mainHeading);
      color: #fff;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.5rem;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default about;
