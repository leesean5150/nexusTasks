from django.shortcuts import render
# from django.http import JsonResponse
from .serializers import TaskSerializer

# Neede for api-view decorator
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

#Import Models
from .models import Task

@api_view(['GET'])
def apiOverview(request):

    #URL Routes
    api_urls ={
        'List': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>',
        'Delete': '/task-delete/<str:pk>',
    }

    return Response(api_urls)

# List of responses

#Serialize the objects
@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all()

    #many = True -> Serialize all objects
    serializer = TaskSerializer(tasks, many=True)
    #Return in our api response
    return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, pk):
    task = Task.objects.get(id = pk)
    serializer = TaskSerializer(task, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET','POST'])
def taskUpdate(request, pk):
    task = Task.objects.get(id = pk)
    serializer = TaskSerializer(instance = task, data = request.data)
    
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET', 'DELETE'])
def taskDelete(request, pk):
    task = Task.objects.get(id = pk)
    task.delete()
    return Response('Item Deleted.')