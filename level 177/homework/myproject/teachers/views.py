from django.http import HttpResponse

def all_teachers(request):
    return HttpResponse("All Teachers")

def add_teacher(request):
    return HttpResponse("Add Teacher")

def delete_teacher(request):
    return HttpResponse("Delete Teacher")

def edit_teacher(request):
    return HttpResponse("Edit Teacher")