# Table of Shits
- [Table of Shits](#table-of-shits)
- [2021/03/21](#20210321)
  - [Training DSA for fun, but outputs shitty error... Gonna get to learn some Python 101s](#training-dsa-for-fun-but-outputs-shitty-error-gonna-get-to-learn-some-python-101s)
- [2021/3/28](#2021328)
  - [ERROR: Could not install packages due to an EnvironmentError](#error-could-not-install-packages-due-to-an-environmenterror)
- [2021/6/11](#2021611)
- [2021/7/24](#2021724)
  - [OOPs understanding](#oops-understanding)
  - [Typing in python](#typing-in-python)
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
- [Python: TypeError: XXX() takes exactly 1 argument (2 given)](https://blog.csdn.net/u012340794/article/details/53957694)

# 2021/3/28
## ERROR: Could not install packages due to an EnvironmentError
```
ERROR: Could not install packages due to an EnvironmentError: [Errno 13] Permission denied: 'c:\\python39\\Scripts\\pywin32_postinstall.py'
Consider using the `--user` option or check the permissions.
```

- https://stackoverflow.com/questions/51912999/could-not-install-packages-due-to-an-environmenterror-winerror-5-access-is-de

# 2021/6/11
- Did some info-gathering shit that for the first time I think really valuable~~~ precise-subtitling

# 2021/7/24
## OOPs understanding
Where did it go wrong? 
```python
# https://leetcode.com/problems/merge-k-sorted-lists/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # Takes two lists sorted in increasing order
    # and merge their nodes together to make one
    # big sorted list. Below function takes
    # O(Log n) extra space for recursive calls,
    # but it can be easily modified to work with
    # same time and O(1) extra space.
    def SortedMerge(a:ListNode, b:ListNode):
        
        result = None
        
        # Base cases
        if (a == None):
            return(b)
        elif (b == None):
            return(a)
        if (a.val <= b.val):
            result = a
            result.next = SortedMerge(a.next, b)
        else:
            result = b
            result.next = SortedMerge(a, b.next)
            
        return result
    
    
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        last = len(lists) - 1
        
        # Repeat until only one list is left
        while (last != 0):
            i = 0
            j = last
            
            # (i, j) forms a pair
            while (i < j):
                
                # Merge List i with List j and store
                # merged list in List i
                lists[i] = self.SortedMerge(lists[i], lists[j])
                
                # Consider next pair
                i += 1
                j -= 1
                
                # If all pairs are merged, update last
                if (i >= j):
                    last = j
        return lists[0]
```
Correction:
```python

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # Takes two lists sorted in increasing order
    # and merge their nodes together to make one
    # big sorted list. Below function takes
    # O(Log n) extra space for recursive calls,
    # but it can be easily modified to work with
    # same time and O(1) extra space.
    def SortedMerge(self,a:ListNode, b:ListNode):
        
        result = None
        
        # Base cases
        if (a == None):
            return(b)
        elif (b == None):
            return(a)
        if (a.val <= b.val):
            result = a
            result.next = self.SortedMerge(a.next, b)
        else:
            result = b
            result.next = self.SortedMerge(a, b.next)
            
        return result
    
    
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        last = len(lists) - 1
        
        # Repeat until only one list is left
        while (last != 0):
            i = 0
            j = last
            
            # (i, j) forms a pair
            while (i < j):
                
                # Merge List i with List j and store
                # merged list in List i
                lists[i] = self.SortedMerge(lists[i], lists[j])
                
                # Consider next pair
                i += 1
                j -= 1
                
                # If all pairs are merged, update last
                if (i >= j):
                    last = j
        return lists[0]
```

## Typing in python
https://docs.python.org/3/library/typing.html