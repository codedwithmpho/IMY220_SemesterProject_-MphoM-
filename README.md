# IMY220 - PXLBOOTH - Deliverable 1

# HOW TO BUILD AND RUN:

# Frontend:
cd frontend
docker build -t pxlbooth-frontend .
docker run -p 5173:5173 pxlbooth-frontend

# Backend:
cd backend
docker build -t pxlbooth-backend .
docker run -p 3000:3000 pxlbooth-backend

Then open http://localhost:5173 in your browser.

# GitHub repo:
https://github.com/codedwithmpho/IMY220_SemesterProject_-MphoM-