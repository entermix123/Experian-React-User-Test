const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const fullData = {
  count: 48,
  results: [
    { id: 1, firstName: "David", lastName: "Wallace" },
    { id: 2, firstName: "Sonia", lastName: "Ross" },
    { id: 3, firstName: "Anthony", lastName: "Thomson" },
    { id: 4, firstName: "Emily", lastName: "Johnson" },
    { id: 5, firstName: "James", lastName: "Brown" },
    { id: 6, firstName: "Sophia", lastName: "Davis" },
    { id: 7, firstName: "Daniel", lastName: "Miller" },
    { id: 8, firstName: "Olivia", lastName: "Wilson" },
    { id: 9, firstName: "Matthew", lastName: "Moore" },
    { id: 10, firstName: "Ava", lastName: "Taylor" },
    { id: 11, firstName: "Michael", lastName: "Anderson" },
    { id: 12, firstName: "Isabella", lastName: "Thomas" },
    { id: 13, firstName: "Ethan", lastName: "Jackson" },
    { id: 14, firstName: "Mia", lastName: "White" },
    { id: 15, firstName: "Alexander", lastName: "Harris" },
    { id: 16, firstName: "Charlotte", lastName: "Martin" },
    { id: 17, firstName: "William", lastName: "Thompson" },
    { id: 18, firstName: "Amelia", lastName: "Garcia" },
    { id: 19, firstName: "Benjamin", lastName: "Martinez" },
    { id: 20, firstName: "Harper", lastName: "Clark" },
    { id: 21, firstName: "James", lastName: "Lewis" },
    { id: 22, firstName: "Evelyn", lastName: "Lee" },
    { id: 23, firstName: "Logan", lastName: "Walker" },
    { id: 24, firstName: "Abigail", lastName: "Hall" },
    { id: 25, firstName: "Elijah", lastName: "Allen" },
    { id: 26, firstName: "Emma", lastName: "Young" },
    { id: 27, firstName: "Daniel", lastName: "King" },
    { id: 28, firstName: "Sofia", lastName: "Wright" },
    { id: 29, firstName: "Oliver", lastName: "Adams" },
    { id: 30, firstName: "Aria", lastName: "Brown" },
    { id: 31, firstName: "Benjamin", lastName: "Taylor" },
    { id: 32, firstName: "Scarlett", lastName: "Hernandez" },
    { id: 33, firstName: "Liam", lastName: "Roberts" },
    { id: 34, firstName: "Luna", lastName: "Gordon" },
    { id: 35, firstName: "Elijah", lastName: "Baker" },
    { id: 36, firstName: "Emily", lastName: "Nelson" },
    { id: 37, firstName: "Lucas", lastName: "Hill" },
    { id: 38, firstName: "Ava", lastName: "Smith" },
    { id: 39, firstName: "Alexander", lastName: "Diaz" },
    { id: 40, firstName: "Sophia", lastName: "Rodriguez" },
    { id: 41, firstName: "Noah", lastName: "Walker" },
    { id: 42, firstName: "Mia", lastName: "Hall" },
    { id: 43, firstName: "Ethan", lastName: "Allen" },
    { id: 44, firstName: "Charlotte", lastName: "Young" },
    { id: 45, firstName: "Michael", lastName: "King" },
    { id: 46, firstName: "Isabella", lastName: "Wright" },
    { id: 47, firstName: "William", lastName: "Adams" },
    { id: 48, firstName: "Amelia", lastName: "Brown" }
  ]
};

app.get('/data/users', (req, res) => {
  const page = parseInt(req.query.page) || 0;
  if (page < 0) return res.status(400).json({ error: 'Invalid page' });
  const pageSize = 10;
  const start = page * pageSize;
  const end = start + pageSize;
  const paginatedResults = fullData.results.slice(start, end);
  res.json({
    count: fullData.count,
    results: paginatedResults
  });
});

const PORT = 3030;
app.listen(PORT, () => console.log(`Mock server running on http://localhost:${PORT}`));