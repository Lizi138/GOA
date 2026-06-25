from django.shortcuts import render

def home(request):
    context = {
        "prices": [50, 120, 80, 200, 150],
        "numbers": [5, 7, 10, 13, 20],
        "words": ["apple", "banana", "kiwi", "orange"],
        "ages": [8, 12, 13, 16, 20],
        "scores": [95, 70, 100, 85, 91]
    }

    return render(request, "index.html", context)