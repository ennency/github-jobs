import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import axios from 'axios';
import WeatherToday, { weatherTodayProps } from '../components/weatherToday';

import { GetStaticProps } from 'next'

type Props = { 
  weatherTodayProps: any
 }

const IndexPage = ({ data }: Props)  => {
  const { weather: consolidated_weather } = data;
  return (
    <Layout>
      <WeatherToday />
    </Layout>
  )
};

export const getServerSideProps: GetStaticProps = async () => {
  const response = await fetch(`https://www.metaweather.com/api/location/44418/`);
  const data = await response.json()
  console.log(data);
  return { props: { data } }
}


export default IndexPage