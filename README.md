# **AI Code Reviewer**

An AI-powered code review tool that leverages **Google Gemini AI** to analyze source code, identify issues, and suggest improvements. The tool provides detailed feedback on code quality, best practices, performance, and security, simulating a senior code reviewer with 7+ years of experience.

---

## **🚀 Features**
- **AI-Powered Code Review:** Uses Google Gemini AI to provide detailed feedback and suggested fixes.
- **Multi-Language Support:** Can analyze JavaScript and other common programming languages.
- **Interactive Web Interface:** Built with React and a code editor for real-time code input.
- **Readable Review Output:** AI responses are rendered in markdown with syntax highlighting.
- **REST API:** A backend service that processes code and returns AI reviews.

---

## **🛠 Tech Stack**
**Frontend:**
- React (Vite)
- `react-simple-code-editor`
- PrismJS & Highlight.js for syntax highlighting
- Markdown rendering (`react-markdown`, `rehype-highlight`)

**Backend:**
- Node.js & Express
- Google Generative AI SDK (Gemini)
- CORS & dotenv

---

## **📂 Project Structure**
<img width="992" height="631" alt="image" src="https://github.com/user-attachments/assets/061b1581-6029-4bd2-a36d-b7a46e27e628" />

---

## **⚙️ Installation & Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/madhavr16/AI-Code-Reviewer.git
cd AI-Code-Reviewer
```
### **2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
```
```bash
npm start
```
### **3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## ▶️ Usage
Start both backend and frontend servers.

Open the React app in your browser.

Write or paste your code in the editor.

Click Review to get AI-powered feedback.

---

## 📸 Screenshots
<img width="1919" height="1003" alt="image" src="https://github.com/user-attachments/assets/c7f92a3f-616e-4a58-b23b-dc1f944fc73f" />
<img width="1919" height="991" alt="image" src="https://github.com/user-attachments/assets/7ad911c1-4351-4551-a8cb-69b3682de4db" />

---

## 🧠 How It Works
The frontend captures the user’s code snippet.

A POST request is sent to http://localhost:3007/ai/get-review.

The backend sends the code to Google Gemini AI with system instructions (as a senior reviewer).

AI returns feedback, which is displayed on the frontend with syntax highlighting.

---

## 🌟 Future Improvements
Support for more programming languages.

Integration with GitHub Pull Requests.

Option to export AI reviews as PDF.

Live linting in the editor.

