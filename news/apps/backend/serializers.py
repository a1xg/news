from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from . import models


class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ("id", "username", "password",)
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = models.User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        return user


class CommentSerializer (serializers.ModelSerializer):
    author_name = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Comment
        fields = '__all__'


class VoteNewsSerializer (serializers.ModelSerializer):

    class Meta:
        model = models.VoteNews
        fields = '__all__'


class NewsListSerializer (serializers.ModelSerializer):
    total_votes = SerializerMethodField()
    total_comments = SerializerMethodField()

    class Meta:
        model = models.News
        fields = (
            'id',
            'creation_date',
            'author_name',
            'title',
            'link',
            'total_comments',
            'total_votes'
        )

    def get_total_comments(self, instance):
        return instance.comments.count()

    def get_total_votes(self, instance):
        return instance.votes.count()


class NewsDetailSerializer (serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    author_name = serializers.HiddenField(default=serializers.CurrentUserDefault())
    votes = VoteNewsSerializer(many=True, read_only=True)

    class Meta:
        model = models.News
        fields = (
            'id',
            'creation_date',
            'author_name',
            'title',
            'link',
            'comments',
            'votes'
        )

class VoteNewsSerializer (serializers.ModelSerializer):
    author_name = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.VoteNews
        fields = (
            'author_name',
            'news'
        )