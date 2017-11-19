from rest_framework import serializers
from . models import Item
from django.contrib.auth.models import User


class ItemSerializer(serializers.ModelSerializer): #inherit from this class
    owner = serializers.ReadOnlyField(source='user.id')
    owners = serializers.ReadOnlyField(source='owner')
    class Meta:
        model = Item
        fields = ('id','name', 'owner', 'owners')


class UserSerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(many=True, queryset=Item.objects.all())
    class Meta:
        model = User
        fields = ('id', 'username', 'items')