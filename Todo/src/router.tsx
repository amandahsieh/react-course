import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosPage from './pages/TodosPage'
import DetailPage from './pages/DetailPage'
import App from './App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/',            element: <HomePage />   },
            { path: '/todos',       element: <TodosPage />  },
            { path: '/todos/:id',   element: <DetailPage /> },
        ]
    }
])

export default router