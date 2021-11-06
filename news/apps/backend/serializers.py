from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ( "id", "username", "password", )
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = models.User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        return user


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = '__all__'

# TODO добавить comments count
class NewsListSerializer(serializers.ModelSerializer):
    # TODO не выводить все комменты, а только их количество
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = models.News
        fields = (
            'creation_date',
            'author_name',
            'title',
            'link',
            'votes',
            'comments',
        )


class NewsDetailSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = models.News
        fields = '__all__'