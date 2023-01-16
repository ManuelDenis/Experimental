from django.urls import path

from lessons.views import LessonView

urlpatterns = [
    path('lesson1/', LessonView.as_view(), name='lesson1'),
]