import { Button } from './components/ui/button';
import { useNavigate } from "react-router-dom";
function App() {

  const navigate = useNavigate();
const nav =() =>{
  navigate('/artistlist')
}

  return (
    <>
      <div>
        {/* <Route path="/artistlist" element={<App />} /> */}
        <Button variant="default" onClick={()=>(navigate('/artistlist'))}>Click me</Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
