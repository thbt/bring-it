from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Item, Event, Vote, Brought
from ..serializers import *
from ..permissions import IsOwnerOrReadOnly
from rest_framework import generics


class BroughtList(generics.ListCreateAPIView):
    queryset = Brought.objects.all()
    serializer_class = BroughtSerializer

    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(profile=self.request.user.profile)


class BroughtDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brought.objects.all()
    serializer_class = BroughtSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

    def perform_update(self, serializer):
        serializer.save(profile=self.request.user.profile)

class ProfileBroughtList(APIView):
    def get(self, request, pItem):
        try:
            items_brought = Brought.objects.filter(item=pItem)
            serializer = VoteSerializer(items_brought, many=True)
            return Response(serializer.data)
        except Brought.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
