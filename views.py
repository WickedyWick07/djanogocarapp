from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Car
from .serializers import CarSerializer

# Create your views here.
class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer