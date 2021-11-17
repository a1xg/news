from django.db.models import Count
from rest_framework import generics, permissions
from . import serializers
from .models import News, Comment
from . import permissions as custom_permissions


class NewsCreateView(generics.CreateAPIView):
    serializer_class = serializers.NewsCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)


class NewsDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.NewsDetailSerializer
    permission_classes = (custom_permissions.IsOwnerOrReadOnly,)
    queryset = News.objects.all()


class NewsListView(generics.ListAPIView):
    serializer_class = serializers.NewsSerializer
    queryset = News.objects.annotate(count=Count("votes")).order_by("-count")


class CommentCreateView(generics.CreateAPIView):
    serializer_class = serializers.CommentCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)


class CommentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.CommentSerializer
    permission_classes = (custom_permissions.IsPostOrCommentOwner,)
    queryset = Comment.objects.all()


class VoteNewsAdd(generics.CreateAPIView):
    serializer_class = serializers.VoteAddSerializer
    permission_classes = (permissions.IsAuthenticated,)
