## 如何测试
### 安装 java skd
在本机安装 java skd1.8，安装路径添加到环境变量，以便能够全局调用 java 命令。具体过程可google。

### tools 路径添加到环境变量
将本项目根路径下的tools文件夹路径，添加到本地环境变量。

### 运行测试
开启 CMD 窗口，执行`HardwareSimulator.bat`，就会弹出 java 硬件模拟器。

>tips: 仅在 windows

配套教程请点击：[https://www.nand2tetris.org/](https://www.nand2tetris.org/)。


## 公式推导
关于 Nand 如何推导出 Not/And/Or/Xor，书中没有说明，所以在做 01 目录时，感到无从下手，后来看到[两个公式](https://electronics.stackexchange.com/questions/360361/convert-and-or-gate-to-only-nand-gates)，有助于我们推导：
````
You can use the De Morgan theorems to convert any OR logic to AND and vice-versa:

!(A * B) = !A + !B

and

!(A + B) = !A * !B
````
