# 🧮 React Calculator

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Status-Completed-success" />
</p>

<p align="center">
  <strong>Simple calculator built with React and Tailwind CSS</strong><br/>
  <em>Простой калькулятор на React и Tailwind CSS</em>
</p>

---

## 📸 Preview

![Calculator Preview](./preview.png)

---

## ✨ Features | Возможности

### 🇬🇧 English
- Clear all input (AC)
- Delete last character (C)
- Basic arithmetic operations: `+ - × ÷ %`
- Correct handling of multiplication and division
- Input length limit (15 characters)
- Rounded result (up to 3 decimal places)
- Error handling
- Responsive UI with Tailwind CSS

### 🇷🇺 Русский
- Полная очистка ввода (AC)
- Удаление последнего символа (C)
- Арифметические операции: `+ - × ÷ %`
- Исправленная работа умножения и деления
- Ограничение длины ввода (15 символов)
- Округление результата до 3 знаков
- Обработка ошибок
- Адаптивный интерфейс на Tailwind CSS

---

## 🛠 Tech Stack | Стек технологий

- ⚛️ React
- 🎨 Tailwind CSS
- 🧠 JavaScript (Hooks)

---

## 📦 Installation | Установка

### 1. Clone repository | Клонировать репозиторий
```bash
git clone https://github.com/USERNAME/react-calculator.git
cd react-calculator
```
### 2. Install dependencies | Установить зависимости
```bash
npm install
```
### 3. Run project | Запустить проект
```bash
npm start
```
## 📁 Project Structure | Структура проекта
```
src/
 ├─ components/
 │   ├─ Calculator.jsx
 │   └─ Keys.jsx
 ├─ App.jsx
 └─ main.jsx
```
## ⚙️ How It Works | Как работает
Calculator.jsx
-Manages calculator state (display, showResult)
-Handles button click logic
-Converts × and ÷ to * and / before calculation
-Calculates result and formats output
-Prevents invalid operator input
-Limits maximum input length
Keys.jsx
-Reusable button component
-Passes button value to calculator
-Special styling for EQUALS button
