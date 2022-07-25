from rest_framework import serializers
from .models import EventUser

class EventUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EventUser
        fields = ('username','email','phone')