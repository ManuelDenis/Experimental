from django.shortcuts import render
from django.views.generic import TemplateView


class LessonView(TemplateView):
    template_name = 'lessons/index-digital-agency.html'
