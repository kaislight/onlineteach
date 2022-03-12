from django.shortcuts import render,redirect
from login import models
from login.models import UserForm,RegisterForm
import hashlib
import random
import os
import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
from pylab import mpl

mpl.rcParams['font.sans-serif'] = ['SimHei'] # 指定默认字体
mpl.rcParams['axes.unicode_minus'] = False   # 解决保存图像是负号'-'显示为方块的问题

def index(request):
    request.session['active'] = 'index'
    return render(request,'index.html')

def fx(a,w,f,t):
    return a * np.cos(w * np.pi * t + f)

def vn(a,w,f,t):
    return -a * np.pi * np.sin(w * np.pi * t + f)

def D1(request):
    p = "img/start.jpg"
    message = ""
    if request.method == "POST":
        print(request.POST)
        t = np.linspace(0,10,1000)
        try:
            a = float(request.POST['a'])
            w = float(request.POST['w'])
            f = float(request.POST['f'])
            x = fx(a,w,f,t)
            v = vn(a,w,f,t)
            fig = plt.figure(figsize=(8,4),dpi=100)
            fig.add_subplot(121)
            plt.plot(t,x)
            plt.xlabel('t')
            plt.ylabel('x')
            plt.xlim(0, 10)
            plt.ylim(-2, 2)
            plt.title("振动曲线")
            fig.add_subplot(122)
            plt.plot(t,v)
            plt.xlabel('t')
            plt.ylabel('v')
            plt.xlim(0, 10)
            plt.title("v-t曲线图")
            plt.savefig('./static/img/D1.jpg')
            p = "img/D1.jpg"
        except:
            message = "请输入正确的数值"
    return render(request,'d1.html',{'p':p,"message":message})