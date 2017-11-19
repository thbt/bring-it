from rest_framework import serializers
from . models import Employee

class employeeSerializer(serializers.ModelSerializer): #inherit from this class
    class Meta:
        model = Employee #define the class that's being serialized
        fields = '__all__' #return all model's fields