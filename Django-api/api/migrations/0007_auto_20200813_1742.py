# Generated by Django 2.2.14 on 2020-08-13 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_register'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='otp',
            field=models.CharField(blank=True, max_length=6),
        ),
    ]
