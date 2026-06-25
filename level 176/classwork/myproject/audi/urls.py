from django.urls import path
from . import views

urlpatterns = [
    path('', views.audi_models),
    path('a4/', views.a4, name='a4'),
    path('a6/', views.a6, name='a6'),
    path('q5/', views.q5, name='q5'),
]