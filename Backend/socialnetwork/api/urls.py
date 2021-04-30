from django.urls import path,include

urlpatterns = [
    path('user/', include('api.user.urls')),
    path('postData/', include('api.postData.urls'))
]
