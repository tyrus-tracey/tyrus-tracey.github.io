import NavBar from "../NavBar";
import ArrowLogo from "../assets/icons/left-arrow.png"


export default function NavParent({boolOnMobile, boolIsOpen, toggleFunc}) {
    return (
        <>
            <NavBar boolNavOpen={boolIsOpen}/>    
            {!boolOnMobile && 
                <button id="button-close" onClick={toggleFunc}>
                    <img src={ArrowLogo} alt="" style={{
                        padding: 'auto auto',
                        width:'20px',
                        height:'20px',
                        maxWidth:'inherit', 
                        maxHeight:'inherit',  
                        objectFit: 'contain',
                        rotate: boolIsOpen ? '0deg' : '180deg'
                    }}></img>
                </button>
            }
        </>
    );
}