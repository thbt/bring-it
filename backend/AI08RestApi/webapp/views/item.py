from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Item, Event
from ..serializers import *
from ..permissions import IsOwnerOrReadOnly
from rest_framework import generics


class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ItemDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)


class ItemDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

class SuggestedItemList(generics.ListCreateAPIView):
    def get(self, request):
        try:
            items = Item.objects.filter(isApproved=False)
            serializer = ItemSerializer(items, many=True)
            return Response(serializer.data)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    # a faire le post
    def post(self, request):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(isApproved=False)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ApprovedItemList(APIView):
    def get(self, request):
        try:
            items = Item.objects.filter(isApproved=True)
            serializer = ItemSerializer(items, many=True)
            return Response(serializer.data)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    # a faire le post
    def post(self, request):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(isApproved=True)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventItemList(APIView):
    def get(self, request, pEvent):
        try:
            items = Item.objects.filter(event=pEvent)
            serializer = ItemSerializer(items, many=True)
            return Response(serializer.data)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
