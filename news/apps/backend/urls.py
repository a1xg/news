from django.urls import path, include
from . import views

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    #path('user/create', views.CreateUserView.as_view()),
    path('news/create', views.NewsCreateView.as_view()),
    path('news/detail/<int:pk>', views.NewsDetailView.as_view()),
    path('news/detail/<int:pk>/comment/create', views.CommentCreateView.as_view()),
    path('comment/detail/<int:pk>', views.CommentView.as_view()),
    path('news/list', views.NewsListView.as_view()),
    path('news/detail/<int:pk>/vote/add', views.VoteNewsAdd.as_view())

]
