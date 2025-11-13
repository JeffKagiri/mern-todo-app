import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Base URL for API - will work in both development and production
const API_BASE = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5001/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      setError('');
      const response = await axios.get(`${API_BASE}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to load todos. Make sure the backend is running.');
    }
  };

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      setLoading(true);
      setError('');
      const response = await axios.post(`${API_BASE}/todos`, { text });
      setTodos([response.data, ...todos]);
      setText('');
    } catch (error) {
      console.error('Error adding todo:', error);
      setError('Failed to add todo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id, completed) => {
    try {
      setError('');
      const response = await axios.put(`${API_BASE}/todos/${id}`, { 
        completed: !completed 
      });
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
      setError('Failed to update todo.');
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    if (!window.confirm('Are you sure you want to delete this todo?')) return;

    try {
      setError('');
      await axios.delete(`${API_BASE}/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError('Failed to delete todo.');
    }
  };

  // Clear all completed todos
  const clearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.completed);
    if (completedTodos.length === 0) return;

    if (!window.confirm(`Delete ${completedTodos.length} completed todo(s)?`)) return;

    try {
      setError('');
      // Delete each completed todo
      for (const todo of completedTodos) {
        await axios.delete(`${API_BASE}/todos/${todo._id}`);
      }
      // Update local state
      setTodos(todos.filter(todo => !todo.completed));
    } catch (error) {
      console.error('Error clearing completed todos:', error);
      setError('Failed to clear completed todos.');
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>📝 MERN Todo App</h1>
          <p>Built with React + Express + MongoDB | Deploying to Azure</p>
        </header>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError('')} className="error-close">×</button>
          </div>
        )}

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
            className="todo-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="add-btn"
            disabled={loading || !text.trim()}
          >
            {loading ? 'Adding...' : 'Add Todo'}
          </button>
        </form>

        {/* Stats */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{todos.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{pendingCount}</span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        {/* Action Buttons */}
        {todos.length > 0 && (
          <div className="action-buttons">
            <button 
              className="clear-btn"
              onClick={clearCompleted}
              disabled={completedCount === 0}
            >
              Clear Completed ({completedCount})
            </button>
            <button 
              className="refresh-btn"
              onClick={fetchTodos}
            >
              Refresh
            </button>
          </div>
        )}

        {/* Todo List */}
        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="no-todos">
              <p>🎉 No todos yet!</p>
              <p>Add your first todo above to get started.</p>
            </div>
          ) : (
            todos.map(todo => (
              <div 
                key={todo._id} 
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <span 
                  className="todo-text"
                  onClick={() => toggleTodo(todo._id, todo.completed)}
                >
                  {todo.text}
                </span>
                <div className="todo-actions">
                  <button 
                    className={`toggle-btn ${todo.completed ? 'completed' : ''}`}
                    onClick={() => toggleTodo(todo._id, todo.completed)}
                    title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {todo.completed ? '✓' : '○'}
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => deleteTodo(todo._id)}
                    title="Delete todo"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <footer className="app-footer">
          <p>Backend running on: {API_BASE}</p>
          <p>Click on todo text to toggle completion</p>
        </footer>
      </div>
    </div>
  );
}

export default App;