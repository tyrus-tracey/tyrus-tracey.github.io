export default function PageHome() {
    
    return (
    <>
        <h1>Hello! 👋</h1>
        <p>My name is Tyrus!<br/><br/>
            I am a BSc Graduate in Computing Science at Simon Fraser University, with my main interests in computer vision and game development.
        </p>
        <br/>
        <h1>What am I up to?</h1>
        <div className="home-container">
            <div>
                <h3>Computer Vision Research at SIGGRAPH 2025</h3>
                <a href="https://yaksoy.github.io/2DGraphicsComp/">
                    <img width="500px" src="/misc/confpic.jpg" alt=""></img>
                </a>
            </div>
            <div>
                <h3>Game Development with Tidepool Games</h3>
                <a href="https://thecdm.ca/projects/big-country-phase-2-campervan-life-tidepool-games">
                    <img img width="600px" src="/misc/big_country.png" alt=""></img>
                </a>
            </div>
        </div>
    </>
    );
}