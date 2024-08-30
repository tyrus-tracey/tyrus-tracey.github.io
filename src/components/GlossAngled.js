/*
    Wraps child elements in a couple divs:
        - one to set a semi-white background
        - another to set the angled transparent mask
*/

export default function GlossAngled({children}) {
    return (
        <div style={{
            background:'rgba(255, 255, 255, 0.75)'
        }}>
            <div style={{
                mask: 'linear-gradient(135deg, black 2%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.9) 31%,black 32%)',
                backgroundBlendMode:'multiply'
            }}>
                {children}
            </div>
        </div>
    );
}
