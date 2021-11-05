from django.contrib.auth import get_user_model
from rest_framework import generics, permissions
from . import serializers

class NewsCreateAPIView(generics.CreateAPIView):
    serializer_class = serializers.NewsDetailSerializer

class CreateUserView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.UserSerializer
