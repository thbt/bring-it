"""AI08RestApi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from webapp import mouloud
from rest_framework.urlpatterns import format_suffix_patterns
from webapp import views
from webapp.views.event import *
from webapp.views.item import *

from django.conf.urls import include

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^items/$', views.ItemList.as_view()),

    url(r'^users/', mouloud.UserListAPI.as_view()),

    url(r'^items/(?P<pEvent>[0-9]+)', views.item.EventItemList.as_view()),
    url(r'^items/$', views.item.ItemList.as_view()),
    url(r'^item/(?P<pk>[0-9]+)', views.item.ItemDetails.as_view()),
    url(r'^suggestedItems/$', views.item.SuggestedItemList.as_view()),
    url(r'^approvedItems/$', views.item.ApprovedItemList.as_view()),

    url(r'^events/(?P<pUser>[0-9]+)', views.event.UserEventList.as_view()),
    url(r'^events/$', views.event.EventList.as_view()),
    url(r'^event/(?P<pk>[0-9]+)', views.event.EventDetails.as_view()),
    url(r'^eventItems/(?P<pEvent>[0-9]+)', views.event.ItemEventList.as_view()),
    url(r'^approvedEventItems/(?P<pEvent>[0-9]+)', views.event.ApprovedItemEventList.as_view()),
    url(r'^suggestedEventItems/(?P<pEvent>[0-9]+)', views.event.SuggestedItemEventList.as_view()),
]

urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]
