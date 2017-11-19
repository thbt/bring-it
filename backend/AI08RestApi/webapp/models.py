from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=10)
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey('auth.User', related_name='items', on_delete=models.CASCADE)

    def __str__(self):
        return self.name