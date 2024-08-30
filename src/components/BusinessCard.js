export default function BusinessCard({
    cssid, title = "", org = "", address = ""
}) {
    return (
        <div id={cssid} style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            width:'100%',
            minWidth: '200px',
            maxWidth: '500px',
            aspectRatio:'3.5/2',
            boxShadow: '0 0 10px black',
            padding: '5px 10px 5px 10px',
            gap: '5px'
        }}>
            <h4 style={{
                textAlign: 'end',
                margin: '0'
            }}>
                {org}
            </h4>
            <div className="title" style={{
                textWrap:'nowrap',
                display: 'flex',
                flexDirection:'column',
                flexGrow:'1',
                textAlign:'center',
                justifyContent:'center',
                margin: '0'
            }}>
                <h3 style={{
                    margin: '0'
                }}>
                    Tyrus Tracey
                </h3>
                <h3 style={{
                    margin: '0',
                    overflow:'hidden'
                }}>
                    {title}
                </h3>
            </div>
            <h5 style={{
                textAlign: 'center',
                margin: '0'
            }}>
                {address}
            </h5>
        </div>
    );
}
