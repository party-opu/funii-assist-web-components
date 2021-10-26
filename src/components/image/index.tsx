// import 'pure-react-carousel/dist/react-carousel.es.css'
import React, { useEffect, useState, useMemo } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import styled from 'styled-components'
import { AppV1_Image } from '@funii-inc/funii-assist-types'
import { ComponentProps } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'
import transpiler from '../transpiler'
import { calcImages } from '../calc'

const DEFAULT_WIDTH = 375
const DEFAULT_HEIGHT = 375

const getImageSize = (url: string) => {
  return new Promise<{ width: number; height: number }>((resolve) => {
    const element = new Image()
    element.onload = () => {
      const width = element.naturalWidth
      const height = element.naturalHeight
      resolve({ width, height })
    }
    element.src = url
  })
}

const ImageComponent = ({ node, actionHandler, paths = [], listItemData }: ComponentProps<AppV1_Image>) => {
  const onCall = useCallableActions(actionHandler)
  const exist = useExistValidActions(paths)

  const [width] = useState<number>(DEFAULT_WIDTH)
  const [height, setHeight] = useState<number | null>(null)

  const images = useMemo(() => {
    return calcImages(node.images, { listItemData }).filter((item) => item.url)
  }, [listItemData, node.images])

  useEffect(() => {
    const task = async () => {
      if (images.length === 0) return

      let newHeight = 0
      const calcTask = images.map(async (image) => {
        if (image.size.width && image.size.height) {
          const w = image.size.width
          const h = image.size.height
          const weight = DEFAULT_WIDTH / w

          if (weight * h > newHeight) {
            newHeight = weight * h
          }
        }

        if (!image.size.width || !image.size.height) {
          const { width: w, height: h } = await getImageSize(image.url)
          const weight = DEFAULT_WIDTH / w

          if (weight * h > newHeight) {
            newHeight = weight * h
          }
        }
      })
      await Promise.all(calcTask)

      if (newHeight === 0) {
        newHeight = DEFAULT_HEIGHT
      }
      setHeight(newHeight)
    }
    task()
  }, [images])

  if (!node.visible) {
    return null
  }

  if (!width || !height) {
    return null
  }

  return (
    <div style={transpiler.imageTranspile(node).imagesStyle}>
      <CarouselProvider naturalSlideWidth={width} naturalSlideHeight={height} totalSlides={images.length}>
        <Slider>
          {images.map((image, index) => (
            <Slide key={index} index={index}>
              <BaseImage
                style={transpiler.imageTranspile(node, image.url).imageStyle}
                onClick={() => onCall(node.actions)}
                data-existlink={exist(node.actions)}
              />
            </Slide>
          ))}
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    </div>
  )
}

const BaseImage = styled.div`
  &[data-existlink='true'] {
    cursor: pointer;
  }
`

export default ImageComponent
