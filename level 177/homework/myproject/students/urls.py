from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.all_students),
    path("add/", views.add_student),
    path("delete/", views.delete_student),
    path("edit/", views.edit_student),
]