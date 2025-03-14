import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, AlertCircle } from 'lucide-react';
import axios from 'axios';

import { signUpSchema, loginSchema } from '../lib/validations';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    occupation: '',
    industry: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        // Validate login data
        loginSchema.parse(formData);

        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: formData.email,
          password: formData.password,
        });

        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        navigate('/');
      } else {
        // Validate signup data
        signUpSchema.parse(formData);

        const response = await axios.post('http://localhost:5000/api/auth/signup', {
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          occupation: formData.occupation,
          industry: formData.industry
        });

        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        navigate('/');

      }
    } catch (err) {
      console.error('Auth error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full">
            <Leaf className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin
              ? 'Sign in to track your carbon footprint'
              : 'Start your journey to carbon neutrality'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 p-4 rounded-lg flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <>
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="occupation" className="text-sm font-medium text-gray-700">
                    Occupation
                  </label>
                  <input
                    id="occupation"
                    name="occupation"
                    type="text"
                    required
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Software Engineer"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="text-sm font-medium text-gray-700">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select an industry</option>
                    <option value="technology">Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail</option>
                    <option value="energy">Energy</option>
                    <option value="transportation">Transportation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Create account'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-green-600 hover:text-green-500"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;