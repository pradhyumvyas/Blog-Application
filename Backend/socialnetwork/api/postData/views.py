from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.db.models import F


# Create your views here.

@csrf_exempt
def createPost(request,id):
    if request.method == "POST":
        username = id
        postTitle = request.POST['postTitle']
        textPost = request.POST['textPost']

        newPost = Post(username=username, postTitle=postTitle, textPost=textPost)
        newPost.save()
        return JsonResponse({"sucess":"Sucessfully post created"})
    return JsonResponse({"error":"Not a post method"})

def showPost(request):
    allPost = Post.objects.all()
    if request.method == "GET":
        mySerializer = PostSerializer(allPost, many=True)
        return JsonResponse(mySerializer.data, safe=False)

@csrf_exempt
def postLike(request, id):
    if request.method == "POST":
        postLike = Post.objects.filter(pk=id).update(like=F('like') + 1)
        # print("HEEEEEEEEEEELllllllllllllll",postLike.like)
        return JsonResponse({"sucess":"Incremented Like"})
@csrf_exempt
def postDislike(request,id):
    if request.method == "POST":
        postLike = Post.objects.filter(pk=id).update(dislike=F('dislike') + 1)
        # print("HEEEEEEEEEEELllllllllllllll",postLike.like)
        return JsonResponse({"sucess":"Incremented disike"})