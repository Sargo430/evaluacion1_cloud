from django.db import models

# Create your models here.
class Asistencia(models.Model):
    nombre = models.CharField(max_length=100)
    fecha = models.DateField()
    presente = models.BooleanField()
    observacion = models.TextField(blank=True)

    def __str__(self):
        return f"{self.nombre} - {self.fecha}"