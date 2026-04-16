from django.shortcuts import render


def cv(request):
    return render(request, 'dev1/cv.html')
