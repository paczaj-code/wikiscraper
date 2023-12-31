import MainLayout from "@/components/Layouts/MainLayout";
import { Button } from "../../ui/button"
import { useNavigate } from 'react-router-dom';
const ArtistsList = ()=>{

    const navigate = useNavigate();

    return  (
    <MainLayout>
    <Button variant="default" onClick={()=>navigate('/')}>Click me</Button>
    </MainLayout>)
}

export default ArtistsList;