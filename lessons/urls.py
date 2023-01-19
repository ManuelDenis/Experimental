from django.urls import path

from lessons import views

urlpatterns = [
    path('', views.openai_view, name='chatbot'),
]