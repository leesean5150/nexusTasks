"""
URL configuration for Todo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from testApp.views import index


#This is where we will render the pages

urlpatterns = [
    path('admin/', admin.site.urls),
    # Creating new landing page (passing function index, creating url path index)
    path('',index,name="index"),

    # Connects our root url to our api url
    path('api/',include('api.urls')),
]
