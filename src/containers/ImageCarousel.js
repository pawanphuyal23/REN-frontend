import React from 'react'
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const ImageCarousel = (props) => {

    const images = props.images.map(image=>{return image["images"]})



 

    return (

    <CarouselProvider
    className='w-1/12'
    naturalSlideWidth={100}
    naturalSlideHeight={400}
    totalSlides={images.length}
  >
<Slider>


{images.map((img,index)=>{
            return <Slide index={index}><Image src={images[index]}/></Slide>
        })}
    
    

        </Slider>


        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
  </CarouselProvider>

    );
  };


export default ImageCarousel