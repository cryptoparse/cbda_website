from django.urls import include, path
from rest_framework import routers
from cbda_bootstrap.views import StudentViewSet


router = routers.DefaultRouter()
router.register(r'studentdetails', StudentViewSet)


urlpatterns = {
    path('',include(router.urls))
}