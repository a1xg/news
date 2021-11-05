from rest_framework import serializers
from . import models

class NewsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.News
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = models.User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        return user

    class Meta:
        model = models.User
        fields = ( "id", "username", "password", )