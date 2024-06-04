from rest_framework import serializers;
from .models import Car;


class CarSerializer(serializers.ModelSerializer):
    class Meta: 
        ordering = ["name"]
        model = Car
        fields = "__all__"