# log

计算对数函数，即log(x, y) = log<sub>x</sub>y。

## 自然对数

### 1. 辛普森公式

根据

![lnx = \int_{1}^{x}\frac{1}{t}dt](1.gif)

辛普森公式

![\int_{a}^{b}f(x)dx \approx \frac{b-a}{6}[f(a) + 4f(\frac{a+b}{2}) + f(b)]](2.gif)

### 2. 黎曼和

![ln(1+x) = \sum_{n-1}^{\infty}\frac{(-1)^{n+1}x^n}{n}](4.gif)

![ln(1-x) = \sum_{n-1}^{\infty}\frac{-x^n}{n}](5.gif)

两式相减得

![ln(\frac{1+x}{1-x}) = \sum_{n-1}^{\infty}\frac{2x^{2n-1}}{2n-1}](6.gif)

令

![u = \frac{1+x}{1-x}](3.gif)

则

![x = \frac{u-1}{u+1}](7.gif)

![ln(u) = \sum_{n-1}^{\infty}\frac{2(\frac{u-1}{u+1})^{2n-1}}{2n-1}](8.gif)
