from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('summernote/', include('django_summernote.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/blog/',include('blog.urls')),
    path('admin/', admin.site.urls),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]