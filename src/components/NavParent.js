import NavBar from "../NavBar";
import MenuLogo from "../assets/icons/side-menu.png"


export default function NavParent({boolOnMobile, boolIsOpen, toggleFunc}) {
    return (
        <>
            <NavBar isCloseable={boolOnMobile} boolNavOpen={boolIsOpen} navClose={toggleFunc}/>
            {boolOnMobile && 
                <button id="button-close" onClick={toggleFunc}>
                    <img src={MenuLogo} alt="" style={{
                        padding: 'auto auto',
                        width:'20px',
                        height:'20px',
                        maxWidth:'inherit', 
                        maxHeight:'inherit',  
                        objectFit: 'contain',
                        filter: 'invert(85%)',
                        rotate: boolIsOpen ? '180deg' : '0deg'
                    }}></img>
                </button>
            }
        </>
    );
}