from django.http import HttpResponse

def all_students(request):
    return HttpResponse("All Students")

def add_student(request):
    return HttpResponse("Add Student")

def delete_student(request):
    return HttpResponse("Delete Student")

def edit_student(request):
    return HttpResponse("Edit Student")