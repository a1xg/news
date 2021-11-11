from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author_name == request.user


class IsPostOrCommentOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        comment_author = obj.author_name
        news_author = obj.news.author_name
        if request.method in permissions.SAFE_METHODS:
            return True
        return comment_author == request.user or news_author == request.user
