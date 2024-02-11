import { createBrowserRouter, createRoutesFromElements, Route, Form } from "react-router-dom";
import App from './App'
import Index from './pages/Index'
import Show from "./pages/Show";
import { cheeseLoader, sliceLoader } from "./loaders";
import { updateAction, createAction, deleteAction } from "./actions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path="" element={<Index />} loader={cheeseLoader}/>
            <Route path=':id' element={<Show />} loader={sliceLoader}/>
            <Route path='create' action={createAction}/>
            <Route path='update/:id' action={updateAction} />
            <Route path='delete/:id' action={deleteAction}/>
            
        </Route>
    )
)

export default router