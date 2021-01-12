关于 Nand 如何推导出 Not/And/Or/Xor，书中没有说明，所以在做 01 目录时，感到无从下手，后来看到[两个公式](https://electronics.stackexchange.com/questions/360361/convert-and-or-gate-to-only-nand-gates)，有助于我们推导：
````
You can use the De Morgan theorems to convert any OR logic to AND and vice-versa:

!(A * B) = !A + !B

and

!(A + B) = !A * !B
````
