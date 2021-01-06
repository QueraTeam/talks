from django.contrib import admin
from .models import Category, Post

admin.site.register([Post, Category])
