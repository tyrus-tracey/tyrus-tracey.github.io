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
                '<a href="https://thecdm.ca/projects/big-country-phase-2-campervan-life-tidepool-games"><h3>Tidepool Games - Big Country</h3></a><p>Cozy Camper Van Customization</p>'
            >
                <ReactPlayer 
                    style={{margin: '0 auto'}} 
                    width= {isMobile? '100%' : '50%'} 
                    height='50%'
                    url="/trailers/BigCountryTrailer.mp4" 
                    controls 
                    light={<img src="/thumbnails/thumb-bc.png" alt="" width="100%" height="100%"/>}
                />
            </Slide>
            <Slide descHTML=
                '<a href="https://yaksoy.github.io/2DGraphicsComp/"><h3>Physically-based Compositing of 2D Graphics</h3></a><p>The insert tool you always wished for.</p>'
            >
                <ReactPlayer 
                    style={{margin: '0 auto'}} 
                    width= {isMobile? '100%' : '50%'} 
                    height='50%'
                    url="/trailers/natlogoinsertion.mp4" 
                    controls 
                    light={<img src="/thumbnails/thumb-ferrari.jpg" alt="" width="100%" height="100%"/>}
                />
            </Slide>
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
        </Carousel>
      );
}