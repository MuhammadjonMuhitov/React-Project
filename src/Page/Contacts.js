import { useState, useEffect } from 'react';
import './style/style.css';  // Подключаем стили

export const Contacts = () => {
  const [input, setInput] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);  // Стейт для пользователей

  // Загрузка данных из JSON
  useEffect(() => {
    fetch('/users.json')  // Загружаем файл users.json из публичной папки
      .then(response => response.json())
      .then(data => setUsers(data))  // Записываем пользователей в стейт
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  // Обработка изменений в полях формы
  const handleChange = (e) => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    const found = users.find(user =>
      user.username === input.username && user.password === input.password
    );

    if (found) {
      setMessage('✅ Добро пожаловать, ' + found.username + '!');
    } else {
      setMessage('❌ Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className="contacts-container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form-header">Вход в профиль</h1>
        <div className="input">
          <input
            type="text"
            name="username"
            placeholder="Имя пользователя"
            value={input.username}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={input.password}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Войти</button>
        {message && <p className="message">{message}</p>}
      </form> 
      
    </div>
  );
};
