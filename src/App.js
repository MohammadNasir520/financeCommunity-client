import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  return (
    <div className='mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
