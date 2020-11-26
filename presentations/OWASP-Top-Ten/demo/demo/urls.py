from django.contrib import admin
from django.urls import path
from demoapp import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index, name="index"),
    path("injection", views.injection, name="injection"),
    path("xss", views.xss, name="xss"),
]
