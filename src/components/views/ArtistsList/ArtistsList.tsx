import MainLayout from "@/components/Layouts/MainLayout";
import { Button } from "../../ui/button"
import { useNavigate } from 'react-router-dom';
import data from '../../../../data/response_1704019118557.json'
const ArtistsList = ()=>{

    const navigate = useNavigate();
    const lists = JSON.stringify(data);
    return  (
    <MainLayout>
        {data.result.map(list=>(
           <div className="list_wrapper" dangerouslySetInnerHTML={{ __html: list.list }}></div>
    ))}

    </MainLayout>)

        }
export default ArtistsList;