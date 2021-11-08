from django.contrib.auth.models import User
from django.db.models import Count
from rest_framework import generics, permissions

from . import serializers
from .models import News, Comment
from .permissions import *

# TODO
#  сделать систему сброса счетчика каждые сутки
#  разобраться с методами RetrieveUpdateDestroyAPIView и реализовать UPDATE DELETE на react

class CreateUserView(generics.CreateAPIView):
    model = User
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.UserSerializer


class NewsCreateView(generics.CreateAPIView):
    serializer_class = serializers.NewsCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)

class NewsDetailView (generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.NewsDetailSerializer
    permission_classes = (IsOwnerOrReadOnly, )
    queryset = News.objects.all()


class NewsListView (generics.ListAPIView):
    serializer_class = serializers.NewsSerializer
    queryset = News.objects.annotate(
        count=Count('votes')
    ).order_by('-count')


class CommentCreateView(generics.CreateAPIView):
    serializer_class = serializers.CommentCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)



class CommentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.CommentSerializer
    permission_classes = (IsPostOrCommentOwner, )
    queryset = Comment.objects.all()


class VoteNewsAdd(generics.CreateAPIView):
    serializer_class = serializers.VoteAddSerializer
    permission_classes = (permissions.IsAuthenticated,)