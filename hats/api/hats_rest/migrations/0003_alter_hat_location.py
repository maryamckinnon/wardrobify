# Generated by Django 4.0.3 on 2022-06-16 18:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0002_alter_locationvo_section_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hat',
            name='location',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hats', to='hats_rest.locationvo'),
        ),
    ]
