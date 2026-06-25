from django.urls import path
from . import views

urlpatterns = [
    path('', views.athome),
    path('honor/', views.honor),
    path('xiaomi/', views.xiaomi),
    path('microsoft/', views.microsoft),
    path('razer/', views.razer),
]