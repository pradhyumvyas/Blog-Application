from django.urls import path, include
from rest_framework import routers 
from . import views
router = routers.DefaultRouter() 
# router.register(r'',views.DataViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('postShow/', views.showPost, name="showPost"),
    path('postCreate/<str:id>/', views.createPost, name="createPost"),
    path('postLike/<int:id>/', views.postLike, name="createPost"),
    path('postDislike/<int:id>/', views.postDislike, name="createPost"),
]