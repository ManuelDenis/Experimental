# Generated by Django 3.2 on 2023-01-19 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(blank=True, max_length=30)),
                ('answer', models.CharField(blank=True, max_length=100)),
            ],
        ),
    ]
