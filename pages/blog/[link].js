import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import client from '../../lib/contentful';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Post = ({ post }) => {
  console.log(post);
  return (
    <Wrapper>
      <div className="container">
        <h1>{post.fields.title}</h1>
        <h4>{`Published: ${post.sys.createdAt.substring(0, 10)}`}</h4>
        <div className="imgBox">
          <Image
            src={`https:${post.fields.mainImage.fields.file.url}`}
            width={post.fields.mainImage.fields.file.details.image.width}
            height={post.fields.mainImage.fields.file.details.image.height}
          />
        </div>

        <div className="text">
          {documentToReactComponents(post.fields.blog)}
        </div>
        <small>
          Author: <span>{post.fields.author}</span>
        </small>
        <p className="updated">
          Last Updated: <span>{post.sys.updatedAt.substring(0, 16)}</span>
        </p>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: var(--verticalSpace);

  .container {
    padding-top: 15rem;

    a {
      font-size: 1.6rem;
      margin-top: 4rem;
      color: var(--accent);
    }

    h1 {
      font-size: var(--subHeading);
      margin-bottom: 2rem;
    }

    h4 {
      font-size: 1.2rem;
      color: var(--primary);
    }

    .imgBox {
      height: 45rem;
      width: 100%;
      margin-bottom: 2rem;

      div {
        height: 100%;
        width: 100%;

        img {
          object-fit: cover;
        }
      }
    }

    .text {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: bold;
      }

      h1 {
        font-size: var(--mainHeading);
      }
      h2 {
        font-size: var(--subHeading) !important;
      }

      h3,
      h4 {
        font-size: var(--cardHeading);
      }

      ol {
        padding: 2.5rem;

        li {
          font-size: 1.3rem;
        }
      }

      p a {
        color: var(--accent);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .block {
        display: block;
        margin-bottom: 0.8rem;

        .inline {
          display: inline;
        }
      }
      p {
        font-size: 1.5rem;
      }
    }

    small,
    .updated {
      font-size: 1.5rem;
      font-weight: bold;

      span {
        color: var(--primary);
      }
    }
  }
`;

export default Post;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog',
  });

  const paths = res.items.map((item) => {
    return {
      params: { link: item.fields.link },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.link': params.link,
  });

  return {
    props: {
      post: items[0],
    },
  };
}
