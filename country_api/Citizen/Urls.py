from django.urls import path
from .views import CitizenList, CitizenCreate

urlpatterns = [
    path('citizens/', CitizenList.as_view(), name='citizen-list'),
    path('citizens/create/', CitizenCreate.as_view(), name='citizen-create'),
]
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('residents.urls')),  # replace 'residents' with your app name
]
