from django.urls import path
from . import views

urlpatterns = [
    path('', views.zoomer),
    path('lenovo/', views.lenovo),
    path('acer/', views.acer),
    path('msi/', views.msi),
    path('dell/', views.dell),
]