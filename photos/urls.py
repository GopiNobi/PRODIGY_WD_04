from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.loginUser, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerUser, name="register"),
    path('',views.homepager,name="myhomepage"),
    path('about/', views.about, name='about'),
    # path('menu/', views.menu, name='menu'),
    path('contact/', views.contact, name='contact'),
    path('usergallery/', views.usergallery, name='usergallery'),
    path('templates_page/',views.templates_page,name='templates_page'),



    path('gallery/',views.gallery,name='gallery'),
    path('photo/<str:pk>',views.viewPhoto,name='photo'),
    path('add/',views.addPhoto,name='add'),

]


