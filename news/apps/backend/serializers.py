from rest_framework import serializers
from . import models

class NewsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.News
        fields = '__all__'


class NewsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.News
        fields = '__all__'


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

