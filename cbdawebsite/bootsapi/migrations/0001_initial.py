# Generated by Django 3.2.5 on 2022-07-25 02:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=60)),
                ('email', models.CharField(max_length=60)),
                ('phone', models.IntegerField(max_length=10)),
            ],
        ),
    ]
