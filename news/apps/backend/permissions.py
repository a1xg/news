from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author_name == request.user


class IsPostOrCommentOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        """
        Permission to modify the comment for the author of the news or the author of the comment
        """
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author_name == request.user or obj.news.author_name == request.user
