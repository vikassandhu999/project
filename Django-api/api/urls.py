from django.contrib import admin
from django.urls import path, include
from api.views import *

urlpatterns = [
    path('book', book_app, name="book_app"),
    path('register', register, name="book_app"),
    path('verify', verify, name="book_app"),
]
