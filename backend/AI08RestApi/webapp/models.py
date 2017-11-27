from django.db import models
from django.contrib.auth.models import User


class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)
    thumbsUp = models.IntegerField(default=0)
    thumbsDown = models.IntegerField(default=0)
    quantity = models.IntegerField(default=1)
    picture = models.ImageField(upload_to="./resources", null=True, max_length=255)
    detail = models.CharField(max_length=150, null=True)
    isApproved = models.BooleanField(default=False)

    owner = models.ForeignKey('auth.User', related_name='items', on_delete=models.CASCADE, null=True)
    event = models.ForeignKey('Event', related_name='event_items', on_delete=models.CASCADE, null=True)
    voters = models.ManyToManyField(User)


    def __str__(self):
        return self.name

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    isOver = models.BooleanField(default=False)
    date = models.DateField()
    location = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    theme = models.CharField(max_length=50)

    host = models.ForeignKey('auth.User', related_name='hosted_events', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profilePicture = models.ImageField(upload_to="./resources/ProfilePictures", null=True, max_length=255)


