import BusinessCard from "./BusinessCard";
import workblurbs from "../pages/workblurbs";

function incrementFlickDelay(i) {
    return `${i * 0.33}s`;
}

// Returns a random integer between -5 and 5
function randFinalRotate(i) {
    const degree = Math.round((Math.random() - 0.5) * 10);
    return `${degree}deg`;
}

export default function CardDealer() {
    let index = 0;
    
    return (
        workblurbs.map((blurb) => {
            index++;
            return (
                <BusinessCard 
                        key={blurb.organization}
                        cssid={blurb.organization.replaceAll(" ", "")}
                        title={blurb.title}
                        org={blurb.organization}
                        address={blurb.address}
                        hoveredText={blurb.content}
                        flickDelay={incrementFlickDelay(index)}
                        finalRotate={randFinalRotate(index)}
                />
            )
        })
    );
}