
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pageone  from './components/Pageone';
import ExistngData from './components/ExistngData'
import Notfound from './components/Notfound'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pageone />,
    },

    {
      path: "/data",
      element: <ExistngData />,
    },
    {
      path:'*',
      element:<Notfound/>
    }
    
    
  ]);
  
    return <RouterProvider router={router} />;


}

export default App;
