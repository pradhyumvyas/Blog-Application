# Generated by Django 3.0.8 on 2021-04-30 22:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('postData', '0005_auto_20210430_2052'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='postDate',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False),
        ),
        migrations.AddField(
            model_name='post',
            name='postTitle',
            field=models.CharField(default='Default', max_length=150),
            preserve_default=False,
        ),
    ]
