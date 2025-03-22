# Library Management System

A full-stack Library Management System built with Django (Backend) and React (Frontend).

## Prerequisites

- Python 3.x
- Node.js and npm
- Virtual environment (recommended)
- MySQL Server

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

3. Configure MySQL Database:
   ```bash
   # Install MySQL Server if not already installed
   # On Ubuntu/Debian
   sudo apt-get install mysql-server
   
   # On macOS using Homebrew
   brew install mysql
   
   # Start MySQL service
   # On Ubuntu/Debian
   sudo service mysql start
   
   # On macOS
   brew services start mysql
   
   # Create MySQL database and user
   mysql -u root -p
   
   # In MySQL prompt
   CREATE DATABASE library_db;
   CREATE USER 'library_user'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON library_db.* TO 'library_user'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   
   # Update database settings in backend/settings.py
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'library_db',
           'USER': 'library_user',
           'PASSWORD': 'your_password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

4. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

5. Apply database migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

7. Run the Django development server:
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
- Database: MySQL

## Features

- Display list of books with details
- Responsive design
- Loading states
- Error handling
- Beautiful card-based UI

## Assumption
- Token Authentication was either basic token authentication or JWT
