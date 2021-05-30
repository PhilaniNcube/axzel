import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

import { gsap } from 'gsap';

const Header = () => {
  const router = useRouter();
  const headingRef = useRef(null);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);
  const overlay3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.to(overlay1Ref.current, { y: '100%', duration: 1, ease: 'power2.out' });
    tl.to(
      overlay2Ref.current,
      { y: '100%', duration: 1, ease: 'power2.out' },
      '-=0.4',
    );
    tl.to(
      overlay3Ref.current,
      { y: '100%', duration: 1, ease: 'power2.out' },
      '-=0.7',
    );
    tl.from(
      headingRef.current,
      {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=1.2',
    );
  }, []);

  return (
    <HeaderWrapper>
      <TopHeader>
        <div className="container" ref={headingRef}>
          <h1>A Pivotal Partnership For Changing Times</h1>
          <div className="navigate">
            <p>More About Us</p>
            <Link href="/about">
              <a>
                <IoArrowForwardCircleOutline />
              </a>
            </Link>
          </div>
        </div>
        <div className="overlay-group">
          <div className="overlay" ref={overlay1Ref}></div>
          <div className="overlay" ref={overlay2Ref}></div>
          <div className="overlay" ref={overlay3Ref}></div>
        </div>
      </TopHeader>
      <BottomHeader>
        <div
          className="box ready"
          onClick={() => router.push('/services/readiness')}
        >
          <h3>POPIA & GDPR Regulatory Readiness</h3>
          <p>
            We will provide tailored POPIA and GDPR Readiness advice and support
            on your journey
          </p>
        </div>
        <div
          className="box protect"
          onClick={() => router.push('/services/data')}
        >
          <h3>End to End Data Protection</h3>
          <p>
            We will structure and drive the implementation of enterprise Data
            Protection programmes including technical guidance and policy
            frameworks
          </p>
        </div>
        <div
          className="box meeting"
          onClick={() => router.push('/services/management')}
        >
          <h3>Data Culture Transformation</h3>
          <p>
            We will structure training interventions and awareness to win your
            workforce’s hearts and minds
          </p>
        </div>
      </BottomHeader>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  /* overflow-x: hidden; */
  min-height: 100vh;

  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const TopHeader = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-image: url('/images/logo-banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* color: #fff; */

  @media screen and (max-width: 800px) {
    background-color: #8e8e8e;
    color: #fff;
    background-size: 150%;
    background-blend-mode: multiply;
    background-position: 80% center;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-top: 4rem;

    h3 {
      font-size: 1.8rem;
    }

    h1 {
      font-size: var(--mainHeading);
      width: 50%;
      min-width: 200px;
      font-weight: 900;
    }

    .navigate {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      font-size: 2.5rem;

      p {
        padding-right: 1rem;
      }

      a {
        cursor: pointer;
        font-size: 2.8rem;
        align-self: center;
        display: inline-block;
        transform: translateY(3px);
        transition: 0.3s;
        transform-origin: center;

        &:hover {
          transform: scale(1.3);
          color: green;
        }
      }
    }
  }

  .overlay-group {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;

    width: 100%;
    height: 100%;
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;

    .overlay {
      width: 100%;
      background-color: #111;
    }
  }
`;
const BottomHeader = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    /* height: 70vh; */
  }

  .box {
    padding: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    font-size: 1.9rem;
    font-weight: 900;
    background-color: rgba(0, 0, 0, 0.6);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    background-blend-mode: darken;
    transition: 0.5s;

    @media screen and (max-width: 800px) {
      justify-content: center;
    }

    h3 {
      font-weight: 900;
      letter-spacing: 2px;
      max-width: 20ch;
      text-align: center;
      transition: all 0.5s ease-in-out;
      transform: translateY(50%);
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
      transform: translateY(170%);
      transition: all 0.5s ease-in-out;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover h3,
    &:hover p {
      transform: translateY(0%);
    }
  }

  .ready {
    background-image: url('/images/ready.jpg');
    align-items: center;
  }

  .protect {
    background-image: url('/images/protection.jpg');
    align-items: center;
  }
  .meeting {
    background-image: url('/images/meeting.jpg');
    align-items: center;
  }
`;
