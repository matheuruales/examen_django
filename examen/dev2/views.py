from django.shortcuts import render


def cv(request):
    return render(request, 'dev2/cv.html')
