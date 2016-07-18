/*

 |--------|------|------|------|-------|------|-----|-----|-----|
 | n      |  7   |  6   |  5   |   4   |  3   |  2  |  1  |  0  |
 |--------|------|------|------|-------|------|-----|-----|-----|
 | Value  | 16^7 | 16^6 | 16^5 | 65536 | 4096 | 256 | 16  |  1  |
 |--------|------|------|------|-------|------|-----|-----|-----|
                            f(n) = 16^n

 | Symbol |  0   |  0   |  0   |   0   |  0   |  0  |  1  |  c  | => 16 + 12 = 28

 Symbols legend:  (0..9)   => 0..9
                  (10..15) => A..F (or a..f)
 Structure: starts with a prefix '0x'

 */

parseInt( '0x1c', 16 ); // 28
parseInt( '1c', 16 ); // 28

(42).toString(16); // "2a" == (16 * 2) + (10 * 1)