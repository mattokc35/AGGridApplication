from django.db import models
from django.contrib.postgres.fields import ArrayField

class Chemical(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField()
    synthesizer = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    lot = models.CharField(max_length=100)
    structure = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    purpose = models.CharField(max_length=100)
    gram = models.FloatField()
    sublimationtemp = models.IntegerField()
    purities = ArrayField(models.FloatField())
    inchikey = models.CharField(max_length=100)
    comment = models.TextField()