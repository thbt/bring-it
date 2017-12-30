from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import *
from ..serializers import *
from ..permissions import IsOwnerOrReadOnly
from rest_framework import generics


class UserEventList(APIView):
    def get(self, request, pUser):
        try:
            events = Event.objects.filter(host=pUser)
            serializer = EventSerializer(events, many=True)
            return Response(serializer.data)
        except Event.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class EventDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        serializer.save(host=self.request.user.profile)

# permet d'avoir la liste des items pour l'event passe en parametre
class ItemEventList(APIView):
    def get(self, request, pEvent):
        try:
            items = Item.objects.filter(event=pEvent)
            serializer = ItemSerializer(items, many=True)
            return Response(serializer.data)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

# permet d'avoir la liste des items approuve pour l'event passe en parametre
class ApprovedItemEventList(APIView):
    def get(self, request, pEvent):
        try:
            items = Item.objects.filter(event=pEvent,isApproved=True)
            serializer = ItemSerializer(items, many=True)
            return Response(serializer.data)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

# permet d'avoir la liste des items suggeres pour l'event passe en parametre
class SuggestedItemEventList(APIView):
    def get(self, request, pEvent):
        try:
            items = Item.objects.filter(event=pEvent,isApproved=False)
            serializer = ItemSerializer(items, many=True)
            return Response(serializer.data)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
