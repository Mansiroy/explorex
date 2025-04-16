# 🌍 ExploreX – Travel Destination Website

**ExploreX** is a responsive and beginner-friendly travel destination website developed by a team of four students in 7 days. The project follows the complete **Software Development Lifecycle (SDLC)** using **Agile methodology**, **JIRA for task management**, **Git & GitHub for version control**, and **GitHub Pages** for deployment. It's designed as a practical learning experience for project collaboration and management.

---

## 🚀 Live Demo

🔗 [ExploreX GitHub Pages](https://avinasdube.github.io/explorex)  
*(Replace with your actual GitHub Pages link)*

---

## 📌 Project Overview

- **Project Name:** ExploreX  
- **Type:** Static Website (Frontend Only)  
- **Duration:** 7 Days  
- **Team Size:** 4 Members  
- **Purpose:** Learn project planning, teamwork, and deployment using SDLC and Agile tools.

---

## 🧩 Features

- 🌐 **Home Page:** Eye-catching hero section, intro text, and featured destinations.
- 📍 **Destinations Page:** List of popular destinations with images and details.
- 👥 **About Us Page:** Info about the team and project goal.
- 📬 **Contact Page:** Contact form with input validation.
- 💻 **Responsive Design:** Optimized for desktop, tablet, and mobile.
- ✨ **Smooth UI:** Clean layout, hover effects, and simple animations.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** CSS Flexbox/Grid or Tailwind CSS
- **Version Control:** Git & GitHub
- **Deployment:** GitHub Pages
- **Project Management:** JIRA (Kanban Board)

---

## 📁 Folder Structure

```
ExploreX/
├── assets/
│   ├── images/         # All images used in the website
│   ├── icons/          # Optional: Icons for UI
│   └── fonts/          # Optional: Custom fonts if used
├── css/
│   └── style.css       # Global styles
├── js/
│   └── main.js         # JavaScript functionality
├── pages/
│   ├── index.html          # Home Page
│   ├── destinations.html   # Destinations Page
│   ├── about.html          # About Us Page
│   └── contact.html        # Contact Page
├── components/
│   ├── navbar.html     # Reusable navigation bar
│   └── footer.html     # Reusable footer
├── .gitignore
├── README.md
└── LICENSE (optional)
```

---

## 👥 Team Members

| Name         | Role                               |
|--------------|------------------------------------|
| Member 1     | Project Manager & JIRA Coordinator |
| Member 2     | Frontend Developer (UI & Pages)    |
| Member 3     | Content Creator & Media Designer   |
| Member 4     | Deployment & QA Lead               |

---

## 📅 SDLC Process Followed

1. **Requirement Gathering** – Identified website scope and page requirements.
2. **Planning** – Set up tasks in JIRA using Agile (Kanban).
3. **Design** – Created wireframes and selected design style.
4. **Development** – Collaboratively built pages and styled UI.
5. **Testing** – Validated form inputs and mobile responsiveness.
6. **Deployment** – Pushed to GitHub and deployed using GitHub Pages.
7. **Review** – Final sprint review and team retrospective.

---

## 🧪 How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/explorex.git
   ```
2. Navigate to the project folder:
   ```bash
   cd explorex
   ```
3. Open `pages/index.html` in your browser  
   *or*  
   Use a Live Server extension in VS Code.

---

## 🌐 Deployment Guide

This project is hosted using GitHub Pages:

1. Push your code to the `main` branch.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch and `/root` directory.
4. Save, and GitHub will provide a live link.

---

## 📋 JIRA Usage

- JIRA board set up using Kanban methodology.
- Tasks categorized as **To Do**, **In Progress**, and **Done**.
- Daily team check-ins and standups.
- Final retrospective to discuss learning outcomes.

---

## ✅ Project Status

- All 4 Pages Designed & Functional
- Responsive on Mobile & Desktop
- JIRA Workflow Followed
- Deployed on GitHub Pages

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share for educational purposes.

---

Made with ❤️ by Team ExploreX


<script>
        // JavaScript to handle "More Destinations" click
        document.querySelector('.btn-more').addEventListener('click', function (e) {
            e.preventDefault();
            const hiddenCards = document.querySelectorAll('.destination-card:nth-child(n+4)');
            hiddenCards.forEach(card => {
                card.style.display = 'block';
            });
            this.style.display = 'none';
        });

        // Initially hide the additional cards (4-6) for the "more" effect
        document.addEventListener('DOMContentLoaded', function () {
            const cards = document.querySelectorAll('.destination-card');
            for (let i = 3; i < cards.length; i++) {
                cards[i].style.display = 'none';
            }
        });
    </script>