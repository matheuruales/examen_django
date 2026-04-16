from django.shortcuts import render


def cv(request):
    return render(request, 'dev3/cv.html')
