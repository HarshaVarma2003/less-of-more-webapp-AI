import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo credentials - in a real app, this would use secure authentication
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin-dashboard');
    } else {
      setError('Invalid username or password');
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-lom-dark px-4">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-400">LessOfMore Portal</h2>
          <p className="mt-2 text-sm text-gray-400">Sign in to access the admin dashboard</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-md text-sm">
              {error}
            </div>}
          
          <div className="rounded-md -space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text" required className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-lom-yellow" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-lom-yellow" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lom-dark bg-lom-yellow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lom-yellow">
              Sign in
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <a href="/" className="text-sm text-lom-yellow hover:underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>;
};
export default AdminLogin;