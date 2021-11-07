from django.contrib.auth.models import User
from rest_framework import generics, permissions
from . import serializers
from .models import News, Comment
from .permissions import IsOwnerOrReadOnly

# TODO
#  сделать систему сброса счетчика каждые сутки
#  - сообщения должны иметь CRUD API для управления комментариями к ним.

class CreateUserView(generics.CreateAPIView):
    model = User
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.UserSerializer


class NewsCreateView(generics.CreateAPIView):
    serializer_class = serializers.NewsCreateSerializer


class NewsDetailView (generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.NewsDetailSerializer
    permission_classes = (IsOwnerOrReadOnly, )
    queryset = News.objects.all()


class NewsListView (generics.ListAPIView):
    serializer_class = serializers.NewsListSerializer
    queryset = News.objects.all()


class CommentCreateView(generics.CreateAPIView):
    serializer_class = serializers.CommentCreateSerializer
    permission_classes = (IsOwnerOrReadOnly, )

# TODO сделать разрешение для управления комментом владельцем поста
class CommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.CommentDetailSerializer
    queryset = Comment.objects.all()


class VoteNewsCreate(generics.CreateAPIView):
    serializer_class = serializers.VoteNewsSerializer
