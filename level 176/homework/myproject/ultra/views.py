from django.http import HttpResponse

def ultra(request):
    return HttpResponse("""
    Huawei<br>
    Gigabyte<br>
    ASUS<br>
    LG
    """)

def huawei(request):
    return HttpResponse("Huawei MateBook D16 - Intel Core i5, 16GB RAM.")

def gigabyte(request):
    return HttpResponse("Gigabyte Aorus 15 - Intel Core i7, RTX 4060.")

def asus(request):
    return HttpResponse("ASUS Vivobook 15 - Ryzen 7, 16GB RAM.")

def lg(request):
    return HttpResponse("LG Gram 16 - Intel Core Ultra 7, 16GB RAM.")