// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Mult.asm

// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)

// Put your code here.
// 乘法可以通过加法实现: 5*3 = 5 + 5 + 5
//
//a=R0
//b=R1
//R2=0
//while(b > 0) {
//  R2 = R2 + a
//  b--
//}

@2
M=0 // R2 = 0

@R0
D=M
@a
M=D // a=R0

@R1
D=M
@b
M=D // b=R1

(LOOP) // 标记循环开始
  @b
  D=M
  @END
  D;JLE // b <= 0，跳转@END

  @a
  D=M
  @2
  M=M + D // R2=R2 + a

  @b
  M=M - 1 // b--

  @LOOP
  0;JMP // 继续循环
(END)  // 标记循环结束

@END
0;JMP



