from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class News (models.Model):
    creation_date = models.DateTimeField(auto_now_add=True)
    author_name = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        blank=False,
        null=True
    )
    title = models.CharField(max_length=300, blank=False)
    link = models.CharField(max_length=300, blank=False)


class Comment (models.Model):
    news = models.ForeignKey(
        'News',
        on_delete=models.CASCADE,
        blank=False,
        related_name='comments'
    )
    creation_date = models.DateTimeField(auto_now_add=True)
    author_name = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        blank=False,
        null=True
    )
    content = models.TextField(
        blank=False
    )

