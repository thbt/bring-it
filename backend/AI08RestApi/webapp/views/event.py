from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Item, Event
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
        serializer.save(host=self.request.user)
