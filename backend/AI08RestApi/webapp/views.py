from django.shortcuts import render

from django.http import HttpResponse
from django.shortcuts import  get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import Employee
from . serializers import employeeSerializer

# Create your views here.

class EmployeeListAPI(APIView):

    def get(self,request): #matching to GET http verb
        employees1 = Employee.objects.all()
        serializer = employeeSerializer(employees1, many = True)
        return Response(serializer.data)

    def post(self): #matching to POST http verb
        pass

class EmployeeAPI(APIView):

    def __getEmployee(self, pk):
        try:
            employee = Employee.objects.get(pk=pk)
            return employee
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self,request,pk):
        employee = self.__getEmployee(pk)
        serializer = employeeSerializer(employee)
        return Response(serializer.data)

    def post(self,request):
        serializer = employeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self,request, pk):
        employee = self.__getEmployee(pk)
        serializer = employeeSerializer(employee, data=request.data) #second argument also means it's an update
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        employee = self.__getEmployee(pk)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


