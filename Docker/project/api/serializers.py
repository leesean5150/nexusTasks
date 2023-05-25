from rest_framework import serializers
from .models import Task

# Serializers convert model objects to be returned
# in a JSON object

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        #Display all the fields from the model
        model = Task
        fields = '__all__'