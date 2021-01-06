from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def related_posts(self):
        return self.post_set.all()

    def __str__(self):
        return self.name


class Post(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField(blank=True, null=True)
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.name
