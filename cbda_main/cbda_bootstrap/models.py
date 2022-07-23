import email
from django.db import models

# Create your models here.
class Student(models.Model):
    name= models.CharField(max_length=100)
    email = models.CharField(max_length=100,primary_key=True)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F','Female'),
        ('O','Other')
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    COURSE_CHOICES = (
        ('BBA','BBA'),
        ('Bcom', 'Bcom'),
        ('Law', 'Law'),
        ('BA.Psy','BA.Psychology'),
        ('BE','Engineering')
    )
    course = models.CharField(max_length=8,choices=COURSE_CHOICES)
