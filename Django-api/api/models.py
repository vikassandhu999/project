from django.db import models
import uuid


class appointment(models.Model):
    refrence_id = models.UUIDField(max_length=100, primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=25, blank=False, null=False)
    mobile_number = models.CharField(max_length=12, null=False, blank=False)
    address = models.CharField(max_length=255)
    date = models.DateTimeField()
    img = models.BinaryField(blank=True, null=True , editable=True)
    additional_info = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

# Create your models here.

class register(models.Model):
    phone = models.CharField(max_length=12, null=False , blank=False)
    otp = models.CharField(max_length=6 , blank=True)

    class Meta:
        db_table="phone_auth"