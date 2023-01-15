from django.urls import path
from users.views import HomePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
]