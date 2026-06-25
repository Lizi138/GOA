from django.http import HttpResponse

def all_staff(request):
    return HttpResponse("All Staff")

def add_staff(request):
    return HttpResponse("Add Staff")

def delete_staff(request):
    return HttpResponse("Delete Staff")

def update_staff(request):
    return HttpResponse("Update Staff")

def dashboard(request):
    return HttpResponse("Staff Dashboard")