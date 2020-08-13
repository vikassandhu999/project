from django.shortcuts import render
from rest_framework import viewsets
import random as r
from rest_framework.response import Response
from .models import appointment
from .serializers import app_serial, phone_serial
from .models import register
from rest_framework import status
from rest_framework.decorators import api_view


def otpgen():
    otp = ""
    for i in range(6):
        otp += str(r.randint(1, 9))
    return otp


@api_view(['GET', 'POST'])
def book_app(request):
    if request.method == 'POST':
        temp_serial = app_serial(data=request.data)
        if temp_serial.is_valid():
            temp_serial.save()
            return Response(temp_serial.data)
        return Response(temp_serial.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response()


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        # temp_serial = app_serial(data=request.data)
        phone = request.POST.get("phone")
        temp = register()
        temp.phone = phone
        temp.otp = otpgen()
        print(temp.otp)
        # send request to sms provider to send sms to given phone number
        if temp.is_valid():
            temp.save()
            return Response(temp.data)
        return Response(register.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def verify(request):
    if request.method == 'POST':
        phone = request.POST.get("phone")
        otp = request.POST.get("otp")
        temp_obj = register.objects.get(phone=phone)
        if otp == temp_obj.otp:
            return Response(status=status.HTTP_200_OK)
        return Response(register.errors, status=status.HTTP_409_CONFLICT)
    return Response(register.errors, status=status.HTTP_400_BAD_REQUEST)

