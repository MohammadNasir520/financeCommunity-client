import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


function App() {
  return (
    <div className='mx-auto '>

      <PhotoProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </PhotoProvider>
    </div>
  );
}

export default App;
