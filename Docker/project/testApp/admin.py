from django.contrib import admin

# Register your models here.
# Will be able to see the model created in Django admin page

from .models import Student

admin.site.register(Student)
