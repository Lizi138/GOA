from django.http import HttpResponse

def athome(request):
    return HttpResponse("""
    Honor<br>
    Xiaomi<br>
    Microsoft<br>
    Razer
    """)

def honor(request):
    return HttpResponse("Honor MagicBook X16 - Ryzen 7, 16GB RAM.")

def xiaomi(request):
    return HttpResponse("Xiaomi RedmiBook Pro 16 - Intel Core Ultra 5, 16GB RAM.")

def microsoft(request):
    return HttpResponse("Microsoft Surface Laptop 7 - Snapdragon X Elite, 16GB RAM.")

def razer(request):
    return HttpResponse("Razer Blade 16 - Intel Core Ultra 9, RTX 4080, 32GB RAM.")