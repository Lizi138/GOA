from django.http import HttpResponse

# Create your views here.
def audi_models(request):
    return HttpResponse("Audi Models" \
    "Audi A4, Audi A6, Audi Q5")

def a4(request):
    return HttpResponse("Audi A4 is a compact executive car" \
    " produced by the German automaker Audi since 1994. It is" \
    " available in sedan, wagon, and convertible body styles and"
    " is known for its luxurious interior, advanced technology features, and strong performance.")

def a6(request):
    return HttpResponse("Audi A6 is a mid-size luxury car produced by the German automaker Audi since 1994." \
    " It is available in sedan, wagon, and allroad body styles and is known for its spacious interior, advanced" \
    " technology features, and strong performance.")

def q5(request):
    return HttpResponse("Audi Q5 is a compact luxury crossover SUV produced by the German automaker Audi since 2008." \
    " It is available in both front-wheel drive and all-wheel drive configurations and is known for its stylish design, comfortable interior, and strong performance.")