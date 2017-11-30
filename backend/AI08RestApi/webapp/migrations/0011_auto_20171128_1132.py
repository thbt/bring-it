# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-28 10:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0010_item_suggestedby'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='owner', to='webapp.Profile'),
        ),
        migrations.AlterField(
            model_name='item',
            name='suggestedBy',
            field=models.ForeignKey(default=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='owner', to='webapp.Profile'), null=True, on_delete=django.db.models.deletion.CASCADE, related_name='suggested_by', to='webapp.Profile'),
        ),
    ]
