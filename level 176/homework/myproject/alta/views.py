from django.http import HttpResponse

def alta(request):
    return HttpResponse("""
    HP<br>
    ROG<br>
    Samsung<br>
    Apple
    """)

def hp(request):
    return HttpResponse("""
    HP Spectre x360
    <br><br>
    Processor: Intel Core Ultra 7
    <br>
    RAM: 16GB
    <br>
    Storage: 1TB SSD
    <br>
    Display: 14-inch OLED
    """)

def rog(request):
    return HttpResponse("""
    ASUS ROG Zephyrus G14
    <br><br>
    Processor: AMD Ryzen 9
    <br>
    Graphics: RTX 4070
    <br>
    RAM: 32GB
    <br>
    Display: 14-inch OLED
    """)

def samsung(request):
    return HttpResponse("""
    Samsung Galaxy Book4
    <br><br>
    Processor: Intel Core 5
    <br>
    RAM: 16GB
    <br>
    Storage: 512GB SSD
    <br>
    Display: 15.6-inch FHD
    """)

def apple(request):
    return HttpResponse("""
    MacBook Air M4
    <br><br>
    Chip: Apple M4
    <br>
    RAM: 16GB
    <br>
    Storage: 512GB SSD
    <br>
    Display: 13.6-inch Liquid Retina
    """)