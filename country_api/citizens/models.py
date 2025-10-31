from django.db import models

# from django.db import models

class Citizen(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    occupation = models.CharField(max_length=100)

    def __str__(self):
        return self.name

