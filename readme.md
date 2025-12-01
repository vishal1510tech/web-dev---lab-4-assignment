# JavaScript Console Quiz Game

A simple browser-based multiple-choice quiz game that runs entirely in the browser console. This quiz tests your knowledge on cybersecurity and technology concepts.

## 📋 Features

- **10 Multiple-Choice Questions** covering cybersecurity and technology topics
- **Interactive Console Interface** using `prompt()` and `alert()`
- **Case-Insensitive Answer Checking** with input validation
- **Immediate Feedback** after each answer
- **Score Tracking** throughout the quiz
- **Final Score Display** at the end

## 🚀 How to Run

### Method 1: Using VS Code with Live Server

1. Install the "Live Server" extension in VS Code
2. Create an `index.html` file with the following code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Game</title>
</head>
<body>
    <h1>Open Console to Start Quiz (Press F12)</h1>
    <script src="quiz.js"></script>
</body>
</html>
```
3. Right-click on `index.html` and select "Open with Live Server"
4. Press **F12** to open the browser console
5. The quiz will start automatically!

### Method 2: Direct Browser Console

1. Open any web browser (Chrome, Firefox, Edge, etc.)
2. Press **F12** or right-click → **Inspect** → **Console** tab
3. Copy the entire content of `quiz.js`
4. Paste it into the console and press **Enter**
5. Answer the prompts and see your score!

### Method 3: Manual HTML File

1. Double-click the `index.html` file to open it in your browser
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab
4. The quiz will start automatically!

## 📝 Quiz Topics

The quiz covers the following topics:
- Password Security
- Networking Concepts (VPN, Ports, IP)
- Operating Systems
- Cybersecurity Threats (Phishing, DDoS)
- Programming Languages
- Web Technologies

## 🛠️ Technologies Used

- **JavaScript (ES6)**
- **Browser Console API** (`prompt()`, `alert()`)
- **Arrays** for storing questions
- **For Loop** for iteration
- **Functions** for code organization
- **String Methods** (`toLowerCase()`, `trim()`)

## 📂 Project Structure

## 💡 Code Highlights

- **Input Validation**: Uses `toLowerCase()` and `trim()` for accurate answer checking
- **Error Handling**: Checks for empty input and provides appropriate messages
- **User-Friendly**: Clear question formatting with multiple-choice options
- **Modular Code**: Well-organized with arrays and functions

## 🎯 Assignment Requirements Met

✅ Quiz logic using loops and conditionals  
✅ Input handling and answer comparison  
✅ Score tracking and display  
✅ Knowledge of browser console  
✅ Overall code readability and structure  
✅ Minimum 5 questions (10 provided)  

## 📄 License

This project is created for educational purposes as part of a JavaScript programming assignment.

---

**Note**: Make sure to open the browser console (F12) to interact with the quiz!
