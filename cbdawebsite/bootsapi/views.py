from rest_framework import viewsets
from .serializers import EventUserSerializer
from .models import EventUser

# Create your views here.

class EventUserViewSet(viewsets.ModelViewSet):
    queryset = EventUser.objects.all().order_by('username')
    serializer_class = EventUserSerializer