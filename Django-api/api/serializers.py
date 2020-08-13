from rest_framework import serializers
from .models import appointment, register


class app_serial(serializers.ModelSerializer):
    class Meta:
        model = appointment
        fields = '__all__'


class phone_serial(serializers.ModelSerializer):
    class Meta:
        model = register
        fields = '__all__'
