import Image from "next/image"
import React, { Component } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

const slider = (
  <AwesomeSlider>
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
  </AwesomeSlider>
)

export default class Banner extends Component {
  render() {
    return slider
  }
}
