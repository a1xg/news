# Generated by Django 3.2.9 on 2021-11-06 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20211106_1646'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
