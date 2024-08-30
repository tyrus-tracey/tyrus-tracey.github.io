import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import BusinessCard from '../components/BusinessCard';
import workblurbs from "./workblurbs";
import React from 'react';

export default function PageWork() {
    return (
        <div className="work-root">
            {
                workblurbs.map((blurb) => {
                    return (
                        <React.Fragment key={blurb.organization}>
                            <BusinessCard 
                                cssid={blurb.organization.replaceAll(" ", "")}
                                title={blurb.title}
                                org={blurb.organization}
                                address={blurb.address}
                                orgFont='Times New Roman'
                                orgFontSize='12px'
                                nameFont='Arial'
                                nameFontSize='20px'
                                titleFont='Arial'
                                titleFontSize='20px'
                                backgr='red'
                            />
                            <p key={blurb.organization + "-content"} style={{
                                marginLeft: 'auto', marginRight:'auto', marginBottom:'75px', textAlign:'center', paddingRight: '0'
                            }}>
                                {parse(DOMPurify.sanitize(blurb.content))}
                            </p>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
}