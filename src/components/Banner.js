import Image from "next/image"
import React, { Component } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import AwesomeSliderStyles from "react-awesome-slider/src/styles"
import withAutoplay from "react-awesome-slider/dist/autoplay"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div>
      <Image
        src="/images/image-1.jpg"
        alt="Image 1"
        width={1000}
        height={1000}
      />
    </div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AutoplaySlider>
)

export default class Banner extends Component {
  render() {
    return slider
  }
}
