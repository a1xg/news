from django.urls import path
from . import views

urlpatterns = [
    path('user/create', views.CreateUserView.as_view()),
    path('news/create', views.NewsCreateView.as_view()),
    path('news/detail/<int:pk>', views.NewsDetailView.as_view()),
    path('news/detail/<int:pk>/comment/create', views.CommentCreateView.as_view()),
    path('comment/detail/<int:pk>', views.CommentDetailView.as_view()),
    path('news/list', views.NewsListView.as_view()),
    path('news/detail/<int:pk>/vote/add', views.VoteNewsAdd.as_view())

]
