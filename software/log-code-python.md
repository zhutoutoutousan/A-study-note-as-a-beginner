# Table of Shits
- [Table of Shits](#table-of-shits)
- [2021/03/21](#20210321)
  - [Training DSA for fun, but outputs shitty error... Gonna get to learn some Python 101s](#training-dsa-for-fun-but-outputs-shitty-error-gonna-get-to-learn-some-python-101s)
# 2021/03/21
## Training DSA for fun, but outputs shitty error... Gonna get to learn some Python 101s
```
TypeError: findMinLength() takes 1 positional argument but 2 were given
    index = self.findMinLength(strs)
Line 20 in longestCommonPrefix (Solution.py)
    ret = Solution().longestCommonPrefix(param_1)
Line 66 in _driver (Solution.py)
    _driver()
Line 77 in <module> (Solution.py)
```

```python
class Solution:
    # A Function to find the string having 
    # the minimum length and returns that length
    def findMinLength(arr):
        return len(min(arr, key = len))
    
    def allContainsPrefix(strList, str, start, end):
        for i in range(0, len(strList)):
            word = strList[i]
            for j in range(start, end + 1):
                if word[j] != str[j]:
                    return False
        return True
    
    # A Function that returns the longest 
    # common prefix from the array of strings
    def longestCommonPrefix(self, strs: List[str]) -> str:
        print(strs)
        index = self.findMinLength(strs)
        prefix = ""   # Our resultant string
        
        # We will do an in-place binary search
        # on the first string of the array
        # in the range 0 to index
        low, high = 0, index - 1
        while low <= high:
            
            # Same as (low + high)/2, but avoids
            # overflow for large low and high
            mid = int(low + (high - low) / 2)
            if allContainsPrefix(strs, strs[0], low, mid):
                
                # If all the strings in the input array
                # contains this prefix then append this
                # substring to our answer
                prefix = prefix + strs[0][low:mid + 1]
                
                # And then go for the right part
                low = mid + 1
            
            else:
                
                # Go for the left part
                high = mid - 1
        return prefix
        
```