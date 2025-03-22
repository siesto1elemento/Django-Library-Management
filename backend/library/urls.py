from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdminSignupView, AdminLoginView, BookViewSet, BookListForStudents

router = DefaultRouter()
router.register(r'books', BookViewSet, basename='book')

urlpatterns = [
    path('admin/signup/', AdminSignupView.as_view(), name='admin-signup'),
    path('admin/login/', AdminLoginView.as_view(), name='admin-login'),
    path('student/books/', BookListForStudents.as_view(), name='student-books'),
    path('', include(router.urls)),
]
