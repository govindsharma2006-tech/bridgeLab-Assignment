# JS Assignment 10 — AJAX, Fetch, XHR & Axios

## Setup — Start JSON Servers

Each question uses its own `db.json` file on a different port.

### Option A: One-Click (Windows)
Double-click **`start-servers.bat`** to launch all 6 servers at once.

### Option B: Manual (run each in a separate terminal)

```bash
npx json-server db1.json --port 3001   # Q1 – Products
npx json-server db2.json --port 3002   # Q2 – Employees
npx json-server db3.json --port 3003   # Q3 – Tasks
npx json-server db4.json --port 3004   # Q4 – Users, Orders, Products
npx json-server db5.json --port 3005   # Q5 – Timetable
npx json-server db6.json --port 3006   # Q6 – Users (Registration)
```

Then open `index.html` in your browser.

---

## Questions

| Q  | File           | Server Port | Technology              | Topic                          |
|----|----------------|-------------|-------------------------|--------------------------------|
| Q1 | question1.html | 3001        | jQuery AJAX `$.ajax()`  | Live Search with `?q=` param   |
| Q2 | question2.html | 3002        | XMLHttpRequest + PATCH  | Employee Status Toggle         |
| Q3 | question3.html | 3003        | jQuery AJAX + Query     | Task Manager with Filters      |
| Q4 | question4.html | 3004        | Fetch + Promise.all     | Multi-API Dashboard + Skeleton |
| Q5 | question5.html | 3005        | Fetch API               | Timetable by Day               |
| Q6 | question6.html | 3006        | Axios GET + POST        | Registration + Duplicate Check |
