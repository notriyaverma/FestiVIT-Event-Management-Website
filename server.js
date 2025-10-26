const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // serve your HTML/CSS files

// Handle organizer form submission
app.post('/organizer-signup', (req, res) => {
  const { clubName, coordinatorName, facultyName, eventDate } = req.body;
  console.log('Organizer signup details:', req.body);

  // You can save these details to a database here (like MongoDB, MySQL, etc.)
  
  // Redirect to a success page
  res.redirect('/success.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Handle participant form submission
app.post('/participant-signup', (req, res) => {
  const { fullName, regNumber, email } = req.body;
  console.log('Participant signup details:', req.body);

  // Save to DB here later (optional)
  
  res.redirect('/success.html');
});
