from django.db import models

class Task(models.Model):
    text = models.CharField(max_length=200)
    day = models.DateField()
    time = models.TimeField(max_length=5)
    reminder = models.BooleanField(default=False)

    def __str__(self):
        return self.text