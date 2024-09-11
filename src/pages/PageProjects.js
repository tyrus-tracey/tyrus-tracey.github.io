import TestImg from '../assets/pictures/snektest.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { useMediaQuery } from 'react-responsive'

function Slide({children, descHTML}) {
    return (
        <div className="slide">
            {children}
            {parse(DOMPurify.sanitize(descHTML))}
        </div>
    );
}

export default function PageProjects() {
    const isMobile = useMediaQuery({ maxWidth: 480 });

      return (
        <Carousel infiniteLoop swipeable showIndicators={false} showStatus={false} showThumbs={false}>
            <Slide descHTML=
                '<a href="https://github.com/tyrus-tracey/arkanoidclone"><h3>Vortex</h3></a><p>Explosive Brick-breaking Action!</p>'
            >
                <ReactPlayer 
                    style={{margin: '0 auto'}} 
                    width= {isMobile? '100%' : '50%'} 
                    height='50%'
                    url="/trailers/brektrailer.webm" 
                    controls 
                    light={<img src="/thumbnails/thumb-brek.png" alt="" width="100%" height="100%"/>}
                />
            </Slide>
            <Slide descHTML="<h3>Immersive-sim Prototype</h3>">
                <div style={{margin: '0 auto', background:'white', width:'45%', height: '45%'}}>
                    <h4>In Progress...</h4>
                    <h5>Check back soon!</h5>
                </div>
            </Slide>
            <Slide descHTML="<h3>TurboSnake</h3>">
                <img src={TestImg} alt="" height="200" width="200"/>
            </Slide>
        </Carousel>
      );
}