from . import views
from django.urls import  path

urlpatterns = [
    path('',views.TaskListCreateView.as_view()),
    path('<int:pk>/',views.TaskDetailView().as_view()),

]