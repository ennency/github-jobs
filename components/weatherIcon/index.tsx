import React, { ReactElement } from 'react'
import styled from 'styled-components';

const StyledWeatherIcon = styled.img`
  width: 96px;
  height: 96px;
  margin: 0;`

export type WeatherIconProps = {
  src: string
}

export default function WeatherIcon( { src }: WeatherIconProps): ReactElement {
  return (
    <StyledWeatherIcon 
      src={src}
    />
  )
}
