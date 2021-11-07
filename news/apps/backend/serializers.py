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


class CommentCreateSerializer (serializers.ModelSerializer):
    author_name = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Comment
        fields = '__all__'


class CommentDetailSerializer (serializers.ModelSerializer):
    author_name = serializers.CharField(source="author_name.username", read_only=True)

    class Meta:
        model = models.Comment
        fields = '__all__'


class NewsListSerializer (serializers.ModelSerializer):
    total_votes = SerializerMethodField()
    total_comments = SerializerMethodField()
    author_name = serializers.CharField(source="author_name.username", read_only=True)

    class Meta:
        model = models.News
        fields = '__all__'

    def get_total_comments(self, instance):
        return instance.comments.count()

    def get_total_votes(self, instance):
        return instance.votes.count()


class VoteNewsSerializer (serializers.ModelSerializer):
    author_name = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.VoteNews
        fields = (
            'author_name',
            'news',
        )


class NewsCreateSerializer (serializers.ModelSerializer):
    author_name = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = models.News
        fields = '__all__'


class NewsDetailSerializer (serializers.ModelSerializer):
    comments = CommentDetailSerializer(many=True, read_only=True)
    total_votes = SerializerMethodField()
    author_name = serializers.CharField(source="author_name.username", read_only=True)
    class Meta:
        model = models.News
        fields = '__all__'

    def get_total_votes(self, instance):
        return instance.votes.count()