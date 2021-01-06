import graphene
from graphene_django import DjangoObjectType

from .models import Post, Category


class PostType(DjangoObjectType):
    class Meta:
        model = Post
        fields = ["id", "name", "content", "categories"]


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ["id", "name", "post_set"]


class BlogQuery(graphene.ObjectType):
    all_categories = graphene.List(CategoryType)
    all_posts = graphene.List(PostType)
    category_by_name = graphene.List(CategoryType, name=graphene.String(required=True))
    post_by_id = graphene.Field(PostType, id=graphene.Int(required=True))
    posts_by_category_id = graphene.List(PostType, id=graphene.Int(required=True))

    def resolve_all_categories(self, info):
        return Category.objects.all()

    def resolve_all_posts(self, info):
        return Post.objects.select_related("categories").all()

    def resolve_category_by_name(self, info, name):
        try:
            return Category.objects.filter(name__contains=name)
        except Category.DoesNotExist:
            return None

    def resolve_post_by_id(self, info, id):
        try:
            return Post.objects.get(id=id)
        except Post.DoesNotExist:
            return None

    def resolve_posts_by_category_id(self, info, id):
        try:
            return Post.objects.filter(categories=id)
        except Post.DoesNotExist:
            return None
