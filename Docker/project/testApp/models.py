from django.db import models

# Create your models here.

#The models created will be seen in the datbase and Django admin (superuser)

class Student(models.Model):
    name=models.CharField(max_length=100)
    des=models.TextField()
    #return Username
    def __str__(self):
        return self.name
