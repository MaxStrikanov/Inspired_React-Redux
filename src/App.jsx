import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import { MainPage } from './Components/MainPage/MainPage';
import { fetchColor } from './features/colorSlice';
import { fetchNavigation } from './features/navigationSlice';
import { Root } from './routes/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<MainPage />} />
      <Route path='catalog/:gender/:category' element={<MainPage/>} />
      
      <Route path='*' element={<ErrorPage />}/>
    </Route>
  )
)

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColor())
  }, [dispatch]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
  
  

