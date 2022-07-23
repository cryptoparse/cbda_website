from attr import field
from rest_framework import serializers

from cbda_bootstrap.models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('name', 'email', 'gender', 'course')