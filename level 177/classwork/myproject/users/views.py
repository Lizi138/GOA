from django.shortcuts import render
from django.http import HttpResponse

users = [
    {'name': "lizi", 'age': 67},
    {'name': "luka", 'age': 6767}
]

# Create your views here.
def user_list(request):
    return HttpResponse("User List")

def add_user(request):
    return HttpResponse("Add User")

def delete_user(request):
    return HttpResponse("Delete User")

def edit_user(request):
    return HttpResponse("Edit User")