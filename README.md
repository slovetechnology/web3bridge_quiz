# 🧠 Dynamic Quiz Game

A fun and interactive **Quiz Game App** built with **React.js**, allowing players to test their knowledge across various topics.  
The game fetches live questions from the [Open Trivia Database API](https://opentdb.com/api_config.php), displays one question at a time, provides instant feedback after each answer, and shows the player’s total score at the end.  

---

## 🚀 Features

✅ Fetches real quiz questions dynamically from a free public API  
✅ Displays one question at a time for focused gameplay  
✅ Shuffles answers randomly to ensure fairness  
✅ Provides instant feedback (“Correct ✅” or “Wrong ❌”)  
✅ Displays final score at the end of the game  
✅ Option to restart the game for a new session  

---

## 🧩 Tech Stack

- **Frontend:** React.js (Vite or CRA)
- **Router:** React Router v6
- **Styling:** TailwindCSS or CSS Modules
- **Data Source:** [Open Trivia DB API](https://opentdb.com/api.php?amount=10&type=multiple)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/slovetechnology/web3bridge_quiz.git
cd quiz-game
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```

The app will start on **http://localhost:5173**.

---

## 🧠 API Source

The game uses the **Open Trivia Database API**, which provides thousands of categorized questions for free:

**Base Endpoint:**
```bash
https://opentdb.com/api.php?amount=10&type=multiple
```

You can customize:
- `amount` → Number of questions  
- `category` → Topic (e.g., General Knowledge, Sports)  
- `difficulty` → easy | medium | hard  
- `type` → multiple | boolean  

---

## 🧮 How It Works

1. On load, the app fetches quiz data dynamically from the API.  
2. Each question and its options are shuffled for randomness.  
3. Players select one answer — instant feedback appears.  
4. After 1.5 seconds, the next question is displayed automatically.  
5. When all questions are answered, the total score is displayed.  
6. The player can replay for a new set of random questions.

---

## 🧪 Example API Response

```json
{
  "response_code": 0,
  "results": [
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "medium",
      "question": "What does CPU stand for?",
      "correct_answer": "Central Processing Unit",
      "incorrect_answers": [
        "Computer Personal Unit",
        "Central Process Unit",
        "Computer Processing Unit"
      ]
    }
  ]
}
```

---

## 🖼️ Screenshot

*(Optional — add an image preview of your quiz UI here)*  
```
![Quiz App Screenshot](./screenshot.png)
```

---

## 🧩 Folder Structure

```
src/
 ├── components/
 │    └── QuizGame.jsx
 ├── App.jsx
 ├── index.js
 ├── styles/
 │    └── quiz.css
 └── assets/
      └── logo.png
```

---

## 🧠 Future Improvements

- ✅ Category & difficulty selection before starting the quiz  
- ✅ Add timer per question  
- ✅ Add leaderboard or scoring history  
- ✅ Save player results in local storage or database  
- ✅ Multi-round gameplay  

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨🏾‍💻 Author

**George Godslove Nkwachukwu**  
Senior Web Engineer | React & Node.js Developer  
🌍 [GitHub](https://github.com/slovetechnology)
