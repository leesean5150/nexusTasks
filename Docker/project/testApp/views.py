from django.shortcuts import render

#.model is relative import(same dirctory)
from .models import Student

# Create your views here.
def index(request):
    #returns request argument and index.html

    obj =Student.objects.all()
    context ={
        "obj":obj,
    }
    return render(request,"index.html",context)
