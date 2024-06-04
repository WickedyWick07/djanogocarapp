from django.db import models

# Create your models here.
class Car(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    year = models.IntegerField(default=2000)
    date = models.DateTimeField(auto_now_add=True)
    model = models.CharField( max_length=50)
    def __str__(self):
        return self.name
    
