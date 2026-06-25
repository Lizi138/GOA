from django.http import HttpResponse

def zoomer(request):
    return HttpResponse("""
    Lenovo<br>
    Acer<br>
    MSI<br>
    Dell
    """)

def lenovo(request):
    return HttpResponse("Lenovo ThinkPad X1 Carbon - Intel Core Ultra 7, 16GB RAM, 1TB SSD.")

def acer(request):
    return HttpResponse("Acer Nitro V15 - Intel Core i7, RTX 4060, 16GB RAM.")

def msi(request):
    return HttpResponse("MSI Katana 15 - Intel Core i7, RTX 4070, 16GB RAM.")

def dell(request):
    return HttpResponse("Dell XPS 13 - Intel Core Ultra 7, 16GB RAM, OLED Display.")