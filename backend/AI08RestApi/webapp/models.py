from django.db import models
from django.contrib.auth.models import User

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, null=False)
    #thumbsUp = models.IntegerField(default=0)
    #thumbsDown = models.IntegerField(default=0)
    quantity = models.IntegerField(default=1)
    #picture = models.ImageField(upload_to="./resources", null=True, max_length=255, default='./resources/jacquet.png')
    detail = models.CharField(max_length=150, null=True)
    isApproved = models.BooleanField(default=False)

    #owner = models.ForeignKey('profile', related_name='owner', on_delete=models.CASCADE, null=True)
    event = models.ForeignKey('event', related_name='event_items', on_delete=models.CASCADE, null=True)
    suggestedBy = models.ForeignKey('profile', related_name='suggested_by', on_delete=models.CASCADE, null=True)

    # différence entre le owner et le suggestedBy ??

    #voters = models.ManyToManyField(User)

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

    host = models.ForeignKey('profile', related_name='hosted_events', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profilePicture = models.ImageField(upload_to="./resources/ProfilePictures", null=True, max_length=255)

    def __str__(self):
        return self.user.username

# représente le lien *->* "vote" entre Item et Profile
class Voter(models.Model):
    item = models.ForeignKey('item', related_name='item_voter', on_delete=models.CASCADE, null=True)
    profile = models.ForeignKey('profile', related_name='profile_voter', on_delete=models.CASCADE, null=True)
    # nature du vote de l'utilisateur, si up=1 alors c'est un upvote, sinon c'est un downVote
    up = models.BooleanField(default=True)

    def __str__(self):
        return self.item.__str__() + " " + self.profile.__str__() + " upvote : " +str(self.up)


# représente le lien *->* "broughtBy" entre Item et Profile
class Brought(models.Model):
    item = models.ForeignKey('item', related_name='item_brought', on_delete=models.CASCADE, null=True)
    profile = models.ForeignKey('profile', related_name='profile_brought', on_delete=models.CASCADE, null=True)
    # nature du vote de l'utilisateur, si up=1 alors c'est un upvote, sinon c'est un downVote
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.item.__str__() + " " + self.profile.__str__() + " quantity : " +str(self.quantity)
