from rest_framework import serializers
from .models import Citizen  # import your model

class CitizenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citizen
        fields = '__all__'  # or list fields like ['first_name', 'last_name', 'age']
