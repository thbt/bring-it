from django.conf.urls import url
from django.contrib import admin
from webapp import mouloud
from rest_framework.urlpatterns import format_suffix_patterns
from webapp import views
from webapp.views.event import *
from webapp.views.item import *
from webapp.views.vote import *
from webapp.views.brought import *
from webapp.views.profile import *
from rest_auth.serializers import UserDetailsSerializer
import rest_auth.views
from django.conf.urls import include

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    #url(r'^login/$', views.user.UserList.as_view()), ????

    # liste des users
    url(r'^users/$', views.profile.ProfileList.as_view()),
    # un seul user en fonction de son id
    url(r'^users/(?P<pk>[0-9]+)', views.profile.ProfileDetails.as_view()),

    url(r'^items/(?P<pEvent>[0-9]+)', views.item.EventItemList.as_view()),
    url(r'^items/$', views.item.ItemList.as_view()),
    url(r'^item/(?P<pk>[0-9]+)', views.item.ItemDetails.as_view()),
    url(r'^suggestedItems/$', views.item.SuggestedItemList.as_view()),
    url(r'^approvedItems/$', views.item.ApprovedItemList.as_view()),

    # les évenements d'un user
    url(r'^events/search/(?P<pUser>[0-9]+)', views.event.UserEventList.as_view()),

    # les évenements du user courant
    url(r'^events/search/$', views.event.SelfEventList.as_view()),

    # liste des events
    url(r'^events/$', views.event.EventList.as_view()),

    # details sur l'event en paramètre
    url(r'^events/(?P<pk>[0-9]+)', views.event.EventDetails.as_view()),

    url(r'^eventItems/(?P<pEvent>[0-9]+)', views.event.ItemEventList.as_view()),
    url(r'^approvedEventItems/(?P<pEvent>[0-9]+)', views.event.ApprovedItemEventList.as_view()),
    url(r'^suggestedEventItems/(?P<pEvent>[0-9]+)', views.event.SuggestedItemEventList.as_view()),

    url(r'^votes/(?P<pItem>[0-9]+)', views.vote.ItemVoteList.as_view()),
    url(r'^votes/$', views.vote.VoteList.as_view()),
    url(r'^vote/(?P<pk>[0-9]+)', views.vote.VoteDetails.as_view()),

    url(r'^brings/(?P<pProfile>[0-9]+)', views.brought.ProfileBroughtList.as_view()),
    url(r'^brings/$', views.brought.BroughtList.as_view()),
    url(r'^bring/(?P<pk>[0-9]+)', views.brought.BroughtDetails.as_view()),
]

urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(r'^rest-auth/', include('rest_auth.urls'))
]
