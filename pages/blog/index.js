import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import client from '../../lib/contentful';
import Link from 'next/link';
import Head from 'next/head';

const index = ({ posts }) => {
  console.log(posts);
  return (
    <Wrapper>
      <Head>
        <title>Axzel | Blog</title>
        <meta
          name="description"
          content="Interesting blog articles on the state of data governance and data privacy"
        />

        <meta
          name="keywords"
          content="data governance, data privacy, data protection"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <Main>
        <div className="container">
          <h1>Latest Posts</h1>
          <Grid>
            {posts.map((post) => {
              return (
                <Post key={post.sys.id}>
                  <div className="imgBox">
                    <Image
                      src={`https:${post.fields.mainImage.fields.file.url}`}
                      width={
                        post.fields.mainImage.fields.file.details.image.width
                      }
                      height={
                        post.fields.mainImage.fields.file.details.image.height
                      }
                    />
                  </div>

                  <h2>{post.fields.title}</h2>
                  <h4>
                    {post.fields.date.substring(0, 10)} : By{' '}
                    <span>{post.fields.author}</span>
                  </h4>
                  <p>{post.fields.blog.content[0].content[0].value}</p>

                  <Link href={`/blog/${post.fields.link}`}>Read More</Link>
                </Post>
              );
            })}
          </Grid>
        </div>
      </Main>
    </Wrapper>
  );
};

export default index;

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'blog',
  });

  return {
    props: {
      posts: data.items,
    },
    revalidate: 60,
  };
}

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 65vh;
  background-image: url('/images/blog.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Main = styled.div`
  width: 100%;
  padding-top: var(--verticalSpace);

  h1 {
    font-size: var(--subHeading);
    margin-bottom: var(--verticalSpace);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Post = styled.div`
  width: 100%;
  margin-bottom: 6rem;

  .imgBox {
    height: 25rem;
    overflow: hidden;

    div {
      height: 100%;

      img {
        object-fit: cover;
      }
    }
  }

  h2 {
    padding-top: 1.3rem;
    font-size: var(--cardHeading);
    margin-bottom: 1.2rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.4rem;
  }

  a {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--primary);
  }
`;
