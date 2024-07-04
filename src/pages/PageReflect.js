import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import PageNotFound from './PageNotFound.js';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export default function PageReflect() {
    const [rows, setRows] = useState([]);
    const {urlcourseid}  = useParams();
    
    useEffect(() => {
        const LoadData = async() => {
            const [response] = (await axios.get(`/reflect/${urlcourseid}`)).data;
            setRows(response);
        }
        
        LoadData();
    }, []);

    if (rows.length === 0) {
        return <PageNotFound />;
    }

    const coursename = rows.coursename;
    const htmlcontent = DOMPurify.sanitize(rows.content);
    return (
    <>
        <h1>{coursename}</h1>
        <p>Views: {rows.viewcount}</p>
        <body>
            {parse(htmlcontent)}
        </body>
        <br/><br/>
    </>
    );
}
