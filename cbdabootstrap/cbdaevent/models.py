from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100, primary_key=True)
    phone = models.IntegerField(max_length=10)

