import MainLayout from "@/components/Layouts/MainLayout";
import data from '../../../../data/response_1.json'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

//  const navigate = useNavigate();

const ArtistsList = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const pageLinks = document.querySelectorAll('.list_wrapper ul li a');

        pageLinks.forEach((pageLink, index) => {
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                const pageTarget = pageLink.getAttribute("href")
                navigate(`../wiki/artist/${pageTarget?.replace('/wiki/', '')}`)

            })
        })
        // return () => {
        //     pageLinks.forEach((pageLink, ) => {
        //         pageLink.removeEventListener('click', (e) => {
        //             e.preventDefault();
        //         })
        //     })
        // }
    })

    return (
        <MainLayout>
            {data.result.map(list => (
                <div className="list_wrapper" dangerouslySetInnerHTML={{ __html: list.list }}></div>
            ))}

        </MainLayout>)

}
export default ArtistsList;