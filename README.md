# Library Management System

A full-stack Library Management System built with Django (Backend) and React (Frontend).

## Prerequisites

- Python 3.x
- Node.js and npm
- Virtual environment (recommended)

## Project Structure

```
Django-Library-Management/
├── backend/         # Django backend
└── frontend/        # React frontend
```

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply database migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

6. Run the Django development server:
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://127.0.0.1:8000`

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the required npm packages:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

The backend provides the following API endpoints:

### Authentication Endpoints
- `POST http://127.0.0.1:8000/api/admin/signup/` - Register a new admin user
- `POST http://127.0.0.1:8000/api/admin/login/` - Login for admin users

### Book Endpoints
- `GET http://127.0.0.1:8000/api/student/books/` - Get list of books for students
- `GET http://127.0.0.1:8000/api/books/` - List all books (requires authentication)
- `POST http://127.0.0.1:8000/api/books/` - Create a new book (requires authentication)
- `GET http://127.0.0.1:8000/api/books/{id}/` - Get details of a specific book (requires authentication)
- `PUT http://127.0.0.1:8000/api/books/{id}/` - Update a book (requires authentication)
- `DELETE http://127.0.0.1:8000/api/books/{id}/` - Delete a book (requires authentication)

## Development

- Backend: Django REST framework(Django==5.1.7)
- Frontend: React with Axios for API calls
- Styling: CSS with modern responsive design

## Features

- Display list of books with details
- Responsive design
- Loading states
- Error handling
- Beautiful card-based UI
