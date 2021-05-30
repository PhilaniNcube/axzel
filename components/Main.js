import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const Main = ({ posts }) => {
  return (
    <MainWrapper>
      <div className="container">
        <CallToAction>
          <div className="text">
            <h1>In Focus</h1>
            <h4>
              The South African Protection of Personal Information Act (POPI)
              was officially enforced on 1 July 2020
            </h4>
            <ul>
              <li>
                What most people don’t know is that certain provisions are
                already in effect (namely Sections 2 until 38; 55 until 109;
                section 111; and section 114 (1), (2), and (3)).{' '}
                <span>
                  [these cover,  Codes of Conduct issued by the Information
                  Regulator; procedures for dealing with customer complaints;
                  provisions regulating direct marketing and unsolicited
                  communications]
                </span>
              </li>
              <li>
                The remaining parts of the Act such as section 110 and 114 (4)
                will then come into effect from 30 June 2021.{' '}
                <span>
                  [states that all forms of processing of personal information
                  must be made to conform to the Act]
                </span>
              </li>
              <li>
                POPIA (or GDPR) readiness is not an overnight exercise and
                insists on unconditional Senior Management buy in and
                accountability throughout the journey.
              </li>
              <li>
                Below are just a few of the key questions all organisations
                regardless of size, industry or mandate should be ready to
                answer:{' '}
                <ul>
                  <li>
                    Have you appointed an Information Officer or an equivalent
                    role to oversee information management?
                  </li>
                  <li>
                    Do you know what customer data you hold and where its stored
                    (including at 3rd parties where applicable)?
                  </li>
                  <li>
                    Can you demonstrate that you have put in place adequate
                    protection measures for your customer’s data?
                  </li>
                  <li>
                    Are you transparent on the purpose for which customer data
                    was collected and is being used; and for how long you keep
                    it?
                  </li>
                  <li>
                    Do you have accessible policies in place to guide your staff
                    to responsibly handle customer data?
                  </li>
                </ul>
              </li>
            </ul>
            <Link href="/services">
              <Button>Learn More</Button>
            </Link>
          </div>

          <Posts>
            <h3>Blog Posts</h3>
            {posts.map((post) => {
              return (
                <div key={post.sys.id}>
                  <img
                    src={post.fields.mainImage.fields.file.url}
                    alt="post image"
                  />
                  <h4>{post.fields.title}</h4>
                  <Link href={`/blog/${post.fields.link}`}>Read More</Link>
                  <hr />
                </div>
              );
            })}
          </Posts>
        </CallToAction>
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin: 3rem 0;
  width: 100%;
  padding-top: var(--verticalSpace);
  padding-bottom: var(--verticalSpace);
`;

const Posts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 1.5rem;
  margin-bottom: 2rem;

  h3 {
    font-size: var(--subHeading);
  }

  div {
    width: 100%;
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: 1.8rem;
    }

    h4 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 1.8rem;
    }

    a {
      font-size: 1.4rem;
      color: var(--primary);
    }
  }
`;

const CallToAction = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3em;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 2rem 4rem;

    h4,
    h1,
    p {
      max-width: 80%;
    }

    h4 {
      font-size: var(--subHeading);
    }

    h1 {
      font-size: var(--mainHeading);
    }
  }

  .text {
    width: 100%;

    h4 {
      font-size: 3em;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding-bottom: 0.3em;
      color: var(--primary);
    }

    h1 {
      font-size: 5.5em;
      margin-bottom: 0.8rem;
      line-height: 1em;
      font-weight: 900;
    }

    ul {
      list-style-type: disc;
      padding-left: 3rem;

      li {
        ul {
          font-size: 1em;
          list-style-type: square;
          color: var(--primary);
          font-style: italic;
        }
      }
    }

    p,
    ul {
      margin-top: 1.8em;
      font-size: 2.4em;

      span {
        font-style: italic;
        color: var(--primary);
      }
    }
  }

  img {
    object-fit: cover;
  }
`;

export default Main;
