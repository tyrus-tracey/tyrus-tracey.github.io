import ProfilePic from '../assets/pictures/profile.jpg'

export default function NavProfile() {
    return (
        <div
        className='nav-profile'
        >
            <img 
                src={ProfilePic}
                alt=""
                style={{
                    background:'rgb(30,30,30)',
                    objectFit: 'cover',
                    border: '2px solid black'
                }}
            >
            </img>
        </div>
    );
}