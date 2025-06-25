# 📚 Book Tracker — Fullstack Interview Challenge

Welcome to your second interview at <company>!

In this challenge, you'll work with a small fullstack Book Tracker app using **React** on the frontend and **Node.js (Express)** on the backend.

Your mission is to fix known issues, implement new features, and connect the frontend with the backend.

---

## 🧪 Your Tasks

Try to complete as many of the following tasks as possible within the allotted time (about **60 minutes**). Prioritize clean, readable code and working functionality over perfection.

### 🔧 Step 1: Fix Known Issues (Frontend)
1. Filtering for `"the"` doesn't return `"The Great Gatsby"` (case-sensitive bug)
2. Selected books are **lost** when filtered out and then cleared
3. Selecting a book (e.g., `"1984"`) and then filtering (`"84"`) causes the wrong book to be highlighted

---

### ✨ Step 2: Add Features (Frontend)
1. **Submit Button with Cancelable Countdown**  
   Add a submit button below the list:
   - When clicked, start a **10-second countdown**
   - Update button label: `Cancel (X seconds)`
   - Allow canceling the submission by clicking again
   - After 10 seconds, disable the button and show “Done”
   - On completion, send a `POST` request to the backend (`/submit`) with the selected books

---

### 🌐 Step 3: Backend Work (Node.js)
Update the `/books` endpoint to support **server-side filtering**.

- If `filter` is provided, return matching books (case-insensitive)
- If no filter is passed, return the full list

---

### 🔁 Step 4: Connect Frontend to Backend
Update the frontend so that book filtering is handled by the backend (`/books?filter=<query>`) instead of locally.

---

## 🕐 Time Limit
Estimated time: **~60 minutes**

Do your best — partial solutions are totally okay!

Good luck!
