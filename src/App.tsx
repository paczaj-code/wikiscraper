import { useNavigate } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import {genres} from '../data/genres'
import { Card } from './components/ui/card';

const App = () => {

  const navigate = useNavigate();

  return (
    <MainLayout>
      <h1 className='text-center py-7'>Wybierz gatunek</h1>
      <div className='flex flex-wrap gap-4 relative justify-center  items-stretch  mx-auto'>
      {genres.map(genre=>(
        <Card onClick={() => navigate('/wiki/artistlist')} 
        className={` flex justify-center items-center  cursor-pointer py-7 px-4 
        bg-gradient-to-b from-sky-900 from-10% via-sky-800 via-30% to-slate-800 to-90%
        w-1/4  text-xl text-gray-200 
        font-bold [text-shadow:2px_2px_1px_rgba(0,0,0,0.5)] text-center border-sky-600
        shadow-[0_3px_3px_rgba(0,0,0,0.5),0_0_4px_2px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-700
        `}><p>{genre.name}</p></Card>
        
      ))}
      </div>

    </MainLayout>
  );
}

export default App;
