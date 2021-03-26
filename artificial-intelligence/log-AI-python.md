# 2021/3/26
## Playing with `3sum` Python3: SyntaxError: Invalid Syntax in def function

- For some reasons(What exactly?) --> for `def someFunction(arr[])`, use `arr` instead

## '<' not supported

```
TypeError: '<' not supported between instances of 'int' and 'builtin_function_or_method'
    elif (nums[i] + nums[l] + nums[r] < sum):
Line 78 in threeSum (Solution.py)
    ret = Solution().threeSum(param_1)
Line 104 in _driver (Solution.py)
    _driver()
Line 115 in <module> (Solution.py)
```