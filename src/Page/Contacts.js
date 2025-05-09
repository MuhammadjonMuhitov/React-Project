import { useState, useEffect } from 'react';
import './style/style.css';

export const Contacts = () => {
  const [input, setInput] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/users.json')  
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      }) 
      .catch(error => {
        console.error('Error loading JSON:', error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (loading) {
      setMessage('⏳ Загрузка данных...');
      return;
    }
  
    console.log('input.username:', input.username);
    console.log('input.password:', input.password);
    console.log('users:', users);
  
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
