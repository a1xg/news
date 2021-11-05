from django.urls import path
from . import views

urlpatterns = [
    path('', views.NewsCreateAPIView.as_view()),
    path('create-user', views.CreateUserView.as_view()),
]