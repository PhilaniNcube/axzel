import styled from 'styled-components';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const quotes = [
  {
    quote: 'Data beats emotions.',
    author: 'Sean Rad',
  },
  {
    quote: 'Data really powers everything that we do.',
    author: 'Jeff Weiner',
  },
  {
    quote: 'Where there is data smoke, there is business fire.',
    author: 'Thomas Redman',
  },
  {
    quote:
      'Without big data, you are blind and deaf and in the middle of a freeway.',
    author: 'Geoffrey Moore',
  },
  {
    quote: 'Torture the data, and it will confess to anything.',
    author: 'Ronald Coase',
  },
  {
    quote: 'The most valuable commodity I know of is information.',
    author: 'Gordon Gekko',
  },
  {
    quote:
      'If we have data, let’s look at data. If all we have are opinions, let’s go with mine.',
    author: 'Jim Barksdale',
  },
  {
    quote:
      'You can have data without information, but you cannot have information without data.',
    author: 'Daniel Keys Moran',
  },
  {
    quote: 'The world is one big data problem.',
    author: 'Andrew McAfee',
  },
  {
    quote:
      'Every company has big data in its future and every company will eventually be in the data business.',
    author: 'Thomas H. Davenport',
  },
  {
    quote: 'Big data will replace the need for 80% of all doctors.',
    author: 'Vinod Khosla',
  },
  {
    quote:
      'There were 5 exabytes of information created between the dawn of civilization through 2003, but that much information is now created every 2 days.',
    author: 'Eric Schmidt',
  },
];

const Slider = () => {
  return (
    <SliderWrapper className="container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 6000 }}
        speed={400}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <Quote>
              <h3>{quote.quote}</h3>
              <p>{quote.author}</p>
            </Quote>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  margin: var(--verticalSpace) auto;
`;

const Quote = styled.div`
  width: 300px;
  height: 300px;

  background: #eef0f4;
  border-radius: 5%;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  padding: 2rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.3rem;

    text-align: center;

    @media screen and (max-width: 800px) {
      width: 70%;
    }
  }

  p {
    font-size: 1.3rem;
  }
`;
