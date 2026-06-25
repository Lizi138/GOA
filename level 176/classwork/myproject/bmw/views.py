from django.http import HttpResponse

# Create your views here.
def bmw_models(request):
    return HttpResponse("BMW Models" \
    "BMW 3 Series, BMW 5 Series, BMW X5")

def bmw_3_series(request):
    return HttpResponse("BMW 3 Series is a compact executive car produced by the German automaker BMW since 1975." \
    " It is available in sedan, wagon, and convertible body styles and is known for its " \
    "sporty handling, luxurious interior, and strong performance.")

def bmw_5_series(request):
    return HttpResponse("BMW 5 Series is a mid-size luxury car produced by the German automaker BMW since 1972." \
    " It is available in sedan, wagon, and gran turismo body styles and is known for its spacious interior, advanced technology features, and strong performance.")

def bmw_x5(request):
    return HttpResponse("BMW X5 is a mid-size luxury crossover SUV produced by the German automaker BMW since 1999."  \
    " It is available in both rear-wheel drive and all-wheel drive configurations and is known for its stylish design, comfortable interior, and strong performance.")