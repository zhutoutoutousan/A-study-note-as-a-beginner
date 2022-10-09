# 2021/7/25
## Understanding of Butterfly graph of FFT
- [The Fast Fourier Transform (FFT): Most Ingenious Algorithm Ever?](https://www.youtube.com/watch?v=h7apO7q16V0)
  - 1-25
    - Odd ? Even : So, the time and space complexity?
      - Odd
        - Plus $2^n$
          - Reaching boundry?
            - Switch
              - Out of bound?
                - Yes: End
                - No: Recursive
      - Even
        - Minus $2^n$
            - Reaching boundry?
              - Switch
                - Out of bound?
                  - Yes: End
                  - No: Recursive