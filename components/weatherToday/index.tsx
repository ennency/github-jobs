import React, { ReactElement } from 'react'
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

export default function WeatherToday({
  temperature, location, weatherStateAbbr
}: weatherTodayProps): ReactElement {
  
  return (
    <section>
      <WeatherIcon src="https://www.metaweather.com/static/img/weather/s.svg" />
      <div>{temperature}<span>C</span></div>
      <div>Shower</div>
      <div>Today Fri,5 Jun</div>
      <div><img />Helsinki</div>
    </section>
  )
}