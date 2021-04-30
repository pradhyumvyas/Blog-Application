from django.db import models
from django.utils.timezone import now


# Create your models here.

class Post(models.Model):

    username = models.CharField(max_length=150)
    postTitle = models.CharField(max_length=150)
    postDate = models.DateTimeField(default=now, editable=False)
    textPost = models.TextField()
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)

    def __str__(self):
        return self.username
    
