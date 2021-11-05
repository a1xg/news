from django.contrib.auth import get_user_model
from rest_framework import generics, permissions
from . import serializers
from .models import News

class CreateUserView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.UserSerializer

class NewsCreateView(generics.CreateAPIView):
    serializer_class = serializers.NewsDetailSerializer

class NewsListView(generics.ListAPIView):
    serializer_class = serializers.NewsListSerializer
    queryset = News.objects.all()

class NewsDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.NewsDetailSerializer
    queryset = News.objects.all()