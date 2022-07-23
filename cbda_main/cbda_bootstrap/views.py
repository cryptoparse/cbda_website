from django import views
from rest_framework import viewsets

from cbda_bootstrap.serializers import StudentSerializer
from cbda_bootstrap.models import Student

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
