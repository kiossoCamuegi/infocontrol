import React from 'react'
import Carousel from "react-multi-carousel";
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';

function HomeProductsSlider() {

  const ProducstData = [
       "https://thetechwiser.com/wp-content/uploads/2023/07/understanding-grounding-in-a-car.jpg",
       "https://miro.medium.com/v2/resize:fit:1400/0*J9-jtTC65glFPFNT.png",
       "https://media.printables.com/media/prints/824237/images/6360292_019bae0c-9293-4e67-8953-37280949d5ee_11b72abd-f52d-433a-baf3-aac3d49ab1cb/large_display_print-example_824237.jpg"
  ];

  const ProductsData2 = [
     "https://c1.wallpaperflare.com/preview/793/683/790/science-electronic-experiment-electricity.jpg", 
     "https://toolsinaction.com/wp-content/uploads/2018/11/HowtoUseAMultimeter19.jpg",
     "https://miro.medium.com/v2/resize:fit:1400/1*ftPrLbR2S6TGVBWTEmiJDg.jpeg"
  ]


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      

  return (
    <div className='wo-main-carousel'>
        <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4000}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={6000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProducstData.map((item, index)=>{
                return (
                 <Link to="#">
                   <div className='carousel-element' key={index+1}> 
                    <ImageLazyLoading source={item} height={500} /> 
                    <div className="over-info">
                          <div className="name">Multimetro HLOPS RDX</div>
                           <div className="price-tag">746.61€ –  <s>7,970.40€ </s></div>
                      </div>
                   </div>
                 </Link>
                )
            })
          } 
       </Carousel>
        </div>
        <div className="carousel-vertical">
          <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4500}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={7000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProductsData2.map((item, index)=>{
                return (
                  <Link to="#">
                    <div className='carousel-element' key={index+1}> 
                      <ImageLazyLoading source={item} height={500} /> 
                      <div className="over-info">
                          <div className="name">Multimetro HLOPS RDX</div>
                           <div className="price-tag">746.61€ –  <s>7,970.40€ </s></div>
                      </div>
                   </div>
                </Link>
                )
            })
          } 
       </Carousel>
        </div>
        </div>
    </div>
  )
}

export default HomeProductsSlider