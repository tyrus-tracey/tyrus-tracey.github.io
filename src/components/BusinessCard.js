import { useState } from "react";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export default function BusinessCard({
    cssid, title = "", org = "", address = "", hoveredText="",
    flickDelay="0s", finalRotate="0deg"
}) {
    const frontSide = 
        <>
            <h4 className = "org" style={{ textAlign: 'end', margin: '0'}}>{org}</h4>
            <div className="main" style={{
                textWrap:'nowrap',
                display: 'flex',
                flexDirection:'column',
                flexGrow:'1',
                textAlign:'center',
                justifyContent:'center',
                margin: '0'
            }}>
                <h3 className = "name" style={{margin: '0'}}>Tyrus Tracey</h3>
                <h3 className = "title" style={{margin: '0', overflow:'hidden'}}>{title}</h3>
            </div>
            <h5 className = "address" style={{textAlign: 'center', margin: '0'}}>{address}</h5>
        </>;

    const backSide = parse(DOMPurify.sanitize(hoveredText));

    const [flip, setFlip] = useState(false);
    const toggleFlip = () => setFlip(!flip);

    return (
        <div 
        id={cssid} 
        className="business-card"
        onClick={toggleFlip}
        style={{
            display: 'flex',
            flexDirection:'column',
            position: 'relative',
            animationName:'cardFlick',
            animationFillMode:'forwards',
            animationDuration:'1s',
            animationTimingFunction:'cubic-bezier(0.47, 0.02, 0, 0.99)',
            animationDelay: flickDelay,
            visibility: 'hidden',
            transform: `rotate(${finalRotate})`,
            willChange: 'transform, top, visibility',
            justifyContent:'space-between',
            width:'100%',
            minWidth: '200px',
            maxWidth: '400px',
            aspectRatio:'3.5/2',
            boxShadow: '0 0 10px black',
            padding: '5px 10px 5px 10px',
            gap: '5px'
        }}>
            {flip? <p>{backSide}</p> : frontSide}
        </div>
    );
}
