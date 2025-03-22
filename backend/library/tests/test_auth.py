from rest_framework.test import APITestCase
from rest_framework import status
from library.models import Admin

class AdminAuthTests(APITestCase):
    def test_signup(self):
        data = {
            "email": "admin@example.com",
            "password": "securepass123"
        }
        response = self.client.post("/api/signup/", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Admin.objects.filter(email="admin@example.com").exists())

    def test_login(self):
        # First create admin
        Admin.objects.create_user(email="admin@example.com", password="securepass123")

        # Then try logging in
        data = {
            "email": "admin@example.com",
            "password": "securepass123"
        }
        response = self.client.post("/api/login/", data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("token", response.data)
