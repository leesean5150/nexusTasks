from django.db import models

# Create your models here.

#Model -> Maps to single table in db
#Create instances of new records to table AND save in db
#Refer to Django docs for model field reference

class Task(models.Model):
    title =models.CharField(max_length=200)
    date = models.CharField(max_length=10)
    completed = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return self.title
