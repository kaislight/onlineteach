from django.shortcuts import render,redirect
from login import models
from login.models import UserForm,RegisterForm
import hashlib
import random
import os
import pandas as pd
import numpy as np


def index(request):
    request.session['active'] = 'index'
    return render(request,'index.html')
