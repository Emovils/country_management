from django.shortcuts import render
from rest_framework import generics
from .models import Citizen
from .serializers import CitizenSerializer

# GET all citizens
class CitizenList(generics.ListAPIView):
    queryset = Citizen.objects.all()
    serializer_class = CitizenSerializer

# POST a new citizen
class CitizenCreate(generics.CreateAPIView):
    queryset = Citizen.objects.all()
    serializer_class = CitizenSerializer


# Create your views here.
