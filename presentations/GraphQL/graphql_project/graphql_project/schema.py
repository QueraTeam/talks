import graphene

from blog.schema import BlogQuery

schema = graphene.Schema(query=BlogQuery)
