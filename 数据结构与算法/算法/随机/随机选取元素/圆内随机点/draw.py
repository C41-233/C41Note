import numpy as np
import random
import math
import matplotlib.pyplot as plt

N = int(10000)
cx = 1.5
cy = 0.5
radius = 5

theta = 2 * math.pi * np.array([random.random() for _ in range(N)])
r = np.array([math.sqrt(random.random()) * radius for _ in range(N)])
x = r * np.cos(theta) + cx;
y = r * np.sin(theta) + cy;

plt.scatter(x, y, s=1)
plt.show()

