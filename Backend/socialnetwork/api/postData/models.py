from django.db import models

# Create your models here.

class Post(models.Model):

    username = models.CharField(max_length=150)
    textPost = models.TextField()
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)

    def __str__(self):
        return self.username
    
