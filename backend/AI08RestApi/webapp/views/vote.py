from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Item, Event, Vote
from ..serializers import *
from ..permissions import IsOwnerOrReadOnly
from rest_framework import generics


class VoteList(generics.ListCreateAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer

    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(profile=self.request.user.profile)


class VoteDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

class ItemVoteList(APIView):
    def get(self, request, pItem):
        try:
            votes = Vote.objects.filter(item=pItem)
            serializer = VoteSerializer(votes, many=True)
            return Response(serializer.data)
        except Vote.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
