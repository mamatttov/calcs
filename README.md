🧮 React Calculator
<p align="center"> <img src="https://img.shields.io/badge/React-18-blue?logo=react" /> <img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss" /> <img src="https://img.shields.io/badge/Status-Active-success" /> </p> <p align="center"> <strong>A simple calculator built with React and Tailwind CSS</strong><br/> <em>Простой калькулятор на React и Tailwind CSS</em> </p>
📑 Table of Contents | Оглавление

📸 Preview
✨ Features | Возможности
🛠 Tech Stack | Стек
📦 Installation | Установка
📁 Project Structure | Структура
⚙️ How It Works | Как работает

✨ Features | Возможности
🇬🇧 English
AC – clear all
C – delete last character
Basic operations: + - x ÷ %
Input length limit (15 characters)
Rounded result (up to 3 decimals)
Error handling
Responsive UI with Tailwind

🇷🇺 Русский
AC — очистить всё
C — удалить последний символ
Операции: + - x ÷ %
Ограничение ввода (15 символов)
Округление результата до 3 знаков
Обработка ошибок
Адаптивный интерфейс

🛠 Tech Stack | Стек
⚛️ React
🎨 Tailwind CSS
🧠 JavaScript (Hooks)
📦 Installation | Установка

1️⃣ Clone repository | Клонировать репозиторий
git clone https://github.com/USERNAME/react-calculator.git
cd react-calculator

2️⃣ Install dependencies | Установить зависимости
npm install

3️⃣ Run project | Запустить проект
npm run dev


или (Create React App):
npm start

📁 Project Structure | Структура
src/
 ├─ components/
 │   ├─ Calculator.jsx
 │   └─ Keys.jsx
 ├─ App.jsx
 └─ main.jsx

⚙️ How It Works | Как работает
Calculator.jsx
Manages calculator state (display, showResult)
Handles button clicks
Calculates result using eval()
Limits input length
Keys.jsx
Reusable button component
Sends button value to calculator
Special styling for EQUALS button
