"use client"
import { useState } from "react"

export function imagesSlideButtonsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  return {
    sliderState,
    setSliderState,
  }
}
