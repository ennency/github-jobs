import React, { ReactNode } from 'react'
import WeatherIcon from '../weatherIcon';
import styled from 'styled-components'

export type weatherTodayProps = {
  id: number,
  temperature: number,
  location: string, 
  date: string,
  weatherStateName: string, 
  weatherStateAbbr: string
}

const WeatherToday = (props: weatherTodayProps): ReactNode => {
  return (
    <section>
      <WeatherIcon src="https://www.metaweather.com/static/img/weather/s.svg" />
      <div>{props.temperature}<span>C</span></div>
      <div>{props.location}</div>
      <div>{props.date}</div>
      <div><img />{props.weatherStateName}</div>
    </section>
  )
}

export default WeatherToday;