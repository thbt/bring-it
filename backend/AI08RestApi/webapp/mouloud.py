from django.shortcuts import render

from django.http import HttpResponse
from django.shortcuts import  get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import Item,Event
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import permissions

from . serializers import *

from .permissions import IsOwnerOrReadOnly

# Create your views here.

class UserListAPI(APIView):

    def get(self,request): #matching to GET http verb
        users = User.objects.all()
        serializer = UserSerializer(users, many = True)
        return Response(serializer.data)







#
# class EmployeeAPI_BUGGED(APIView):
#
#     def __getEmployee(self, pk):
#         try:
#             employee = EmployeeFriend.objects.get(pk=pk)
#             return employee
#         except EmployeeFriend.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)
#
#     def get(self,request,pk):
#         employee = self.__getEmployee(pk)
#         serializer = employeeFriendSerializer(employee)
#         return Response(serializer.data)
#
#     def post(self,request):
#         serializer = employeeFriendSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def put(self,request, pk):
#         employee = self.__getEmployee(pk)
#         serializer = employeeFriendSerializer(employee, data=request.data) #second argument also means it's an update
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
#
#     def delete(self, request, pk):
#         employee = self.__getEmployee(pk)
#         employee.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

