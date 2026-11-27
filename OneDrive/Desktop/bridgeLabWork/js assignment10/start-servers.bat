@echo off
echo Starting JSON Servers for JS Assignment 10...
echo.
start "Q1 - Products (3001)"    cmd /k npx json-server db1.json --port 3001
timeout /t 1 >nul
start "Q2 - Employees (3002)"   cmd /k npx json-server db2.json --port 3002
timeout /t 1 >nul
start "Q3 - Tasks (3003)"       cmd /k npx json-server db3.json --port 3003
timeout /t 1 >nul
start "Q4 - Multi-API (3004)"   cmd /k npx json-server db4.json --port 3004
timeout /t 1 >nul
start "Q5 - Timetable (3005)"   cmd /k npx json-server db5.json --port 3005
timeout /t 1 >nul
start "Q6 - Users (3006)"       cmd /k npx json-server db6.json --port 3006
echo.
echo All 6 JSON servers started!
echo Q1: http://localhost:3001/products
echo Q2: http://localhost:3002/employees
echo Q3: http://localhost:3003/tasks
echo Q4: http://localhost:3004/users  /orders  /products
echo Q5: http://localhost:3005/timetable
echo Q6: http://localhost:3006/users
pause
