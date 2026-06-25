from django.urls import path
from . import views

urlpatterns = [
    path('', views.audi_models),
    path('a4/', views.a4),
    path('a6/', views.a6),
    path('x5/', views.bmw_x5),
]