// frontend-admin/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductForm from './components/ProductForm';
import ProjectListPage from './pages/ProjectListPage'; 
import ProjectForm from './components/ProjectForm';
import NewsListPage from './pages/NewsListPage';
import NewsForm from './components/NewsForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="admin-layout">
        <aside className="sidebar">
          <h1>Admin Panel</h1>
          <nav>
            <ul>
              <li><NavLink to="/">Dashboard</NavLink></li>
              <li><NavLink to="/products">Quản lý Sản phẩm</NavLink></li>
              <li><NavLink to="/projects">Quản lý Dự án</NavLink></li>
              <li><NavLink to="/news">Quản lý Tin tức</NavLink></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            {/* Product Routes */}
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/add" element={<ProductForm />} />
            <Route path="/products/edit/:id" element={<ProductForm />} />
            
            {/* Project Routes */}
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="/projects/add" element={<ProjectForm />} />
            <Route path="/projects/edit/:id" element={<ProjectForm />} />

            {/* News Routes */}
            <Route path="/news" element={<NewsListPage />} />
            <Route path="/news/add" element={<NewsForm />} />
            <Route path="/news/edit/:id" element={<NewsForm />} />

            <Route path="/" element={<h2>Chào mừng đến với trang quản trị!</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

