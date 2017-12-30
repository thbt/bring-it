from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class EventSerializer(serializers.ModelSerializer):  # inherit from this class
    if(isinstance(serializers.ReadOnlyField(source='profile.id'), int) ):
        host = serializers.ReadOnlyField(source='profile.id')

    event_items = serializers.PrimaryKeyRelatedField(many=True, queryset=Item.objects.all())

    class Meta:
        model = Event
        fields = ('__all__')


class UserSerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(many=True, queryset=Item.objects.all())
    profilePicture = serializers.ImageField(source='profile.profilePicture')

    class Meta:
        model = User
        fields = ('id', 'username', 'items', 'profilePicture')


class ItemSerializer(serializers.ModelSerializer):  # inherit from this class
    #event = serializers.ReadOnlyField(source='event.id')
    ##voters = UserSerializer(read_only=True, many=True)

    #suggestedBy = serializers.PrimaryKeyRelatedField(source="user.id", queryset=Profile.objects.all())
    #picture = serializers.ImageField(max_length=None, use_url=True, required=False)

    class Meta:
        model = Item
        fields = ("__all__")

class VoteSerializer(serializers.ModelSerializer):
    if (isinstance(serializers.ReadOnlyField(source='profile.id'), int)):
        profile = serializers.ReadOnlyField(source='profile.id')

    class Meta:
        model = Vote
        fields = ('__all__')

class BroughtSerializer(serializers.ModelSerializer):
    if (isinstance(serializers.ReadOnlyField(source='profile.id'), int)):
        profile = serializers.ReadOnlyField(source='profile.id')

    class Meta:
        model = Brought
        fields = ('__all__')
