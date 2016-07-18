/*

 |-------|-----|-----|-----|-----|-----|-----|-----|-----|
 | n     |  7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  |
 |-------|-----|-----|-----|-----|-----|-----|-----|-----|
 | Value | 128 | 64  | 32  | 16  |  8  |  4  |  2  |  1  |
 |-------|-----|-----|-----|-----|-----|-----|-----|-----|
                        f(n) = 2^n

 | Bit   |  0  |  0  |  0  |  0  |  1  |  1  |  0  |  1  | => 13

 */

parseInt( '1101', 2 ); // 13

(42).toString(2); // "101100" == 00101100
(42).toString(1); // Uncaught RangeError: toString() radix argument must be between 2 and 36