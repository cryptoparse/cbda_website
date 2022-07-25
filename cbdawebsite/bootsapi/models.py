from django.db import models

# Create your models here.
class EventUser(models.Model):
    username = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    phone = models.IntegerField()

    def __str__(self):
        return self.email