import NavBar from '../components/NavBar';

export default function HomePage() {
    return (
        <div className="text-center min-h-screen bg-gray-100 p-6">
            <NavBar />
            <h1 className="text-3xl font-bold mb-4">Welcome to Todo App!</h1>
            <p className="text-lg text-gray-600">Please go to todos for more content.</p>
        </div>
    )
}