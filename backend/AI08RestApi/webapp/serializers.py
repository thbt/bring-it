from rest_framework import serializers
from .models import Item, Event
from django.contrib.auth.models import User
from .models import Profile

class EventSerializer(serializers.ModelSerializer):  # inherit from this class
    host = serializers.ReadOnlyField(source='user.id')
    # TODO
    event_items = serializers.PrimaryKeyRelatedField(many=True, queryset=Item.objects.all().filter(isApproved=1))

    class Meta:
        model = Event
        fields = ('title', 'host', 'event_items')


class UserSerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(many=True, queryset=Item.objects.all())
    profilePicture = serializers.ImageField(source='profile.profilePicture')

    class Meta:
        model = User
        fields = ('id', 'username', 'items', 'profilePicture')


class ItemSerializer(serializers.ModelSerializer):  # inherit from this class
    owner = serializers.ReadOnlyField(source='user.id')
    # owners = serializers.ReadOnlyField(source='owner')
    event = serializers.ReadOnlyField(source='event.id')
    voters = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Item
        fields = ('__all__')