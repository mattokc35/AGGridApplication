from django.urls import path
from .views import get_chemicals

urlpatterns = [
    path('chemicals/', get_chemicals, name='get_chemicals'),
]