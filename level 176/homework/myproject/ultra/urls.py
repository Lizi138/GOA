from django.urls import path
from . import views

urlpatterns = [
    path('', views.ultra),
    path('huawei/', views.huawei),
    path('gigabyte/', views.gigabyte),
    path('asus/', views.asus),
    path('lg/', views.lg),
]