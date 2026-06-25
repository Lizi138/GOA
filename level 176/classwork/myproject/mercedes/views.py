from django.http import HttpResponse


# Create your views here.
def mercedes_models(request):
    return HttpResponse("Mercedes Models" \
    "Mercedes C-Class, Mercedes E-Class, Mercedes GLE") 

def c_class(request):
    return HttpResponse("Mercedes C-Class is a compact executive car produced by the German automaker Mercedes-Benz since 1993." \
    " It is available in sedan, coupe, and convertible body styles and is known for its luxurious interior, advanced technology features, and strong performance.")

def e_class(request):
    return HttpResponse("Mercedes E-Class is a mid-size luxury car produced by the German automaker Mercedes-Benz since 1993." \
    " It is available in sedan, wagon, coupe, and convertible body styles and is known for its spacious interior, advanced technology features, and strong performance.")

def gle(request):
    return HttpResponse("Mercedes GLE is a mid-size luxury crossover SUV produced by the German automaker Mercedes-Benz since 1997." \
    " It is available in both rear-wheel drive and all-wheel drive configurations and is known for its stylish design, comfortable interior, and strong performance.")