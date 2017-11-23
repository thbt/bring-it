from rest_framework import serializers
from .models import Item, Event
from django.contrib.auth.models import User


class ItemSerializer(serializers.ModelSerializer):  # inherit from this class
    owner = serializers.ReadOnlyField(source='user.id')
    # owners = serializers.ReadOnlyField(source='owner')
    event = serializers.ReadOnlyField(source='event.id')

    class Meta:
        model = Item
        fields = ('__all__')


class EventSerializer(serializers.ModelSerializer):  # inherit from this class
    host = serializers.ReadOnlyField(source='user.id')
    class Meta:
        model = Event
        fields = ('__all__')


class UserSerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(many=True, queryset=Item.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'items')
