from django.contrib import admin
from . models import Item
from . models import Event

# Register your models here.

admin.site.register(Item)
admin.site.register(Event)

