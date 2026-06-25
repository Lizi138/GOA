from django.urls import path
from . import views

urlpatterns = [
    path('', views.audi_models),
    path('gle/', views.gle),
    path('c-class/', views.c_class),
    path('e-class/', views.e_class),
]