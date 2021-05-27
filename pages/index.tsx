import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { GetServerSideProps } from 'next'
import axios from 'axios';
import { WeatherToday } from '../components/weatherToday';
import { weatherTodayProps } from '../components/weatherToday/weatherToday';
import { GetStaticProps } from 'next'


const IndexPage = (props: weatherTodayProps)  => {
  const { weather: consolidated_weather } = data;
  return (
    <Layout>
      <WeatherToday {...props} />
    </Layout>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`https://www.metaweather.com/api/location/44418/`);
  const data = await response.json()
  console.log(data);
  return { props: { data } }
}


export default IndexPage