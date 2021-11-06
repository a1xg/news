from django.contrib.auth import get_user_model
from rest_framework import generics, permissions
from . import serializers
from .models import News
from .permissions import IsOwnerOrReadOnly

# TODO Сделать систему голосования за пост, ограничить возможность голосования 1 голосом на пользователя.
#  сделать невозможным голосование пользователя за собственный пост
#  сделать систему сброса счетчика каждые сутки


class CreateUserView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.UserSerializer



class NewsCreateView(generics.CreateAPIView):
    serializer_class = serializers.NewsDetailSerializer


class NewsListView (generics.ListAPIView):
    serializer_class = serializers.NewsListSerializer
    queryset = News.objects.all()


class NewsDetailView (generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.NewsDetailSerializer
    permission_classes = (IsOwnerOrReadOnly, )
    queryset = News.objects.all()


class CommentCreateView(generics.CreateAPIView):
    serializer_class = serializers.CommentSerializer
    permission_classes = IsOwnerOrReadOnly
