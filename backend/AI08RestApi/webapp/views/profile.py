from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from ..models import Item, Event
from rest_framework.permissions import *
from ..serializers import *
from ..permissions import IsOwnerOrReadOnly
from rest_framework import generics

# permet d'avoir la liste des utilisateurs
class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
            user = User.objects.create_user(username=self.request.data['username'],password=self.request.data['password'])
            serializer.save(user=user)

# permet d'avoir des details sur un utilisateur dont l'id est passé en paramètre
class ProfileDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    #permission_classes = (IsAuthenticatedOrReadOnly)

    def perform_update(self, serializer):
            user = User.objects.create_user(username=self.request.data['username'],password=self.request.data['password'])
            serializer.save(user=user)


# class ProfileList(APIView):
#     def get(self, request):
#             try:
#                 profiles = Profile.objects.all()
#                 serializer = ProfileSerializer(profiles, many=True)
#                 return Response(serializer.data)
#             except Item.DoesNotExist:
#                 return Response(status=status.HTTP_404_NOT_FOUND)
#
#         # a faire le post
#         def post(self, request):
#             serializer = ProfileSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save(User.save()=False)
#                 return Response(serializer.data)
#             else:
#                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# class ItemDetails(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Item.objects.all()
#     serializer_class = ItemSerializer
#
#     # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
#
#
# class SuggestedItemList(APIView):
#     def get(self, request):
#         try:
#             items = Item.objects.filter(isApproved=False)
#             serializer = ItemSerializer(items, many=True)
#             return Response(serializer.data)
#         except Item.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)
#
#     # a faire le post
#     def post(self, request):
#         serializer = ItemSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(isApproved=False)
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class ApprovedItemList(APIView):
#     def get(self, request):
#         try:
#             items = Item.objects.filter(isApproved=True)
#             serializer = ItemSerializer(items, many=True)
#             return Response(serializer.data)
#         except Item.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)
#
#     # a faire le post
#     def post(self, request):
#         serializer = ItemSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(isApproved=True)
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class EventItemList(APIView):
#     def get(self, request, pEvent):
#         try:
#             items = Item.objects.filter(event=pEvent)
#             serializer = ItemSerializer(items, many=True)
#             return Response(serializer.data)
#         except Item.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)
