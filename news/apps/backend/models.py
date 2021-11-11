from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass


class News(models.Model):
    creation_date = models.DateTimeField(auto_now_add=True)
    author_name = models.ForeignKey(
        CustomUser, on_delete=models.SET_NULL, blank=False, null=True
    )
    title = models.CharField(max_length=300, blank=False)
    link = models.URLField(max_length=500, blank=False)


class Comment(models.Model):
    news = models.ForeignKey(
        "News", on_delete=models.CASCADE, blank=False, related_name="comments"
    )
    creation_date = models.DateTimeField(auto_now_add=True)
    author_name = models.ForeignKey(
        CustomUser, on_delete=models.SET_NULL, blank=False, null=True
    )
    content = models.TextField(blank=False)


class VoteNews(models.Model):
    author_name = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE)
    news = models.ForeignKey(
        News,
        on_delete=models.CASCADE,
        related_name="votes")

    class Meta:
        unique_together = ("author_name", "news")

    def __str__(self):
        return str(self.author_name)
