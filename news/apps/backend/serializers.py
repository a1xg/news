from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = (
            "id",
            "username",
            "password",
        )
        write_only_fields = ("password",)
        read_only_fields = ("id",)

    def create(self, validated_data):
        user = models.CustomUser.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
        )
        return user


class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(
        source="author_name.username",
        read_only=True
    )

    class Meta:
        model = models.Comment
        fields = "__all__"


class CommentCreateSerializer(CommentSerializer):
    author_name = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )


class VoteAddSerializer(serializers.ModelSerializer):
    author_name = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.VoteNews
        fields = "__all__"


class NewsCreateSerializer(serializers.ModelSerializer):
    author_name = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.News
        fields = "__all__"


class NewsSerializer(serializers.ModelSerializer):
    total_votes = SerializerMethodField("get_total_votes")
    total_comments = SerializerMethodField("get_total_comments")
    voters = SerializerMethodField("get_voters_list")
    author_name = serializers.CharField(
        source="author_name.username",
        read_only=True
    )

    class Meta:
        model = models.News
        fields = "__all__"

    def get_total_comments(self, instance):
        return instance.comments.count()

    def get_total_votes(self, instance):
        return instance.votes.count()

    def get_voters_list(self, instance):
        return [voter.author_name.username for voter in instance.votes.all()]


class NewsDetailSerializer(NewsSerializer):
    comments = CommentSerializer(many=True, read_only=True)
