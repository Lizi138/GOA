from django.shortcuts import render

def index(request):
    context = {
        'arr': [
            {
                'name': 'aleksandre',
                'surname': 'dzukaevi',
                'age': 15
            },
            {
                'name': 'davit',
                'surname': 'shavidze',
                'age': 17
            },
            {
                'name': 'lizi',
                'surname': 'mchedlidze',
                'age': 13
            }
        ]
    }
    return render(request, 'index.html', context)