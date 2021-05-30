import Head from 'next/head';
import { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Popi from '../components/Popi';
import Slider from '../components/Slider';
import client from '../lib/contentful';

export default function Home({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Axzel</title>
        <meta
          name="description"
          content="Manage your companies data processes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
      <HomeWrapper>
        <Header />
        <Main posts={posts} />
      </HomeWrapper>
      <Slider />
    </Fragment>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
`;

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
