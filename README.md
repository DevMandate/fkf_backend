# FKF Referee Education & Learning — Online Assessment System

This is a web-based quiz application designed for FKF referee education and assessment.  
The system allows referees to take a timed Laws of the Game test, prevents multiple attempts globally, stores results centrally in Google Sheets, and allows authorized admins to view a live leaderboard.

---

## Features

### Timed Quiz
- 20 questions total
- 45 seconds per question
- 20 minutes overall time limit
- Auto-submit when time expires

### Single Attempt Per User (Global)
- Each referee is allowed only one attempt
- Attempt restriction is enforced globally using Google Sheets
- Works across all devices and browsers

### Centralized Results Storage
- All results are saved to Google Sheets
- Results are shared across all users and devices
- Data persists even if browser data is cleared

### Admin Leaderboard
- Admin access controlled via email
- Leaderboard ranks users from highest to lowest score
- Admins can view results without taking the test

### Loading Indicators
- Loader shown when starting the test
- Loader shown when checking eligibility
- Loader shown when loading leaderboard results
- Prevents frozen or static screen experience

### Results Download
- Users can download:
  - CSV report
  - HTML report containing questions and answers

### Responsive Design
- Works well on desktops and tablets
- Clean and simple interface

---

## Admin Functionality

Admins are pre-approved using email addresses configured in `leaderboard.js`.

Admins can:
- View the leaderboard from the start screen
- View the leaderboard after completing a test
- Access all results from any device

---

## Project File Structure

/project-root
│
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Application styles
│
├── js/
│   ├── main.js             # Quiz flow and state control
│   ├── questions.js        # Questions data
│   ├── timers.js           # Global and per-question timers
│   ├── render.js           # Question rendering logic
│   ├── export.js           # CSV and HTML export
│   ├── users.js            # Attempt validation (Google Sheets)
│   ├── leaderboard.js      # Save and display results
│   ├── api.js              # Google Apps Script API bridge
│   └── utils.js            # Helper functions (loader/spinner)
│
└── README.md               # Project documentation


---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Sheets
- Google Apps Script
- Netlify / Static Hosting Compatible

---

## Setup Instructions

1. Clone or download the project folder.
2. Create one Google Spreadsheet with two sheets:
   - attempts
   - results
3. Attach a Google Apps Script backend to the spreadsheet.
4. Deploy the script as a Web App (Access: Anyone).
5. Copy the Web App URL and paste it into `api.js`.
6. Ensure all JavaScript files are correctly linked in `index.html`.
7. Open `index.html` in a browser or deploy to Netlify.

---

## How to Take the Test (For Referees)

1. Enter your full name on the start screen.
2. Click Start Test.
3. If you have already attempted the test, access will be denied.
4. Answer each question within the allocated time.
5. Questions lock once answered or when time expires.
6. The test auto-submits when the total time runs out.
7. View your final score and download your results.

---

## Admin Notes

Admin emails are defined in `leaderboard.js`:

const ADMIN_USERS = ["example@gmail.com"];

Only listed emails can view the leaderboard.  
Admins do not need to attempt the test to view results.

---

## Important Notes

- User identity is currently based on full name.
- For higher security, email or ID-based identification is recommended.
- This system is suitable for education and assessment use.
- Not intended for high-security or financial applications.

---

## Optional Future Enhancements

- Email or ID-based authentication
- Exam deadline enforcement
- Automatic charts in Google Sheets
- PDF result export
- Question-level analytics
- Search and pagination on leaderboard

---

## License

This project is intended for internal FKF referee education and assessment use only.  
Do not distribute or use commercially without permission.
