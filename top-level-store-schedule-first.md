# Significant Events
- [MetaFest VR Jam #2](https://itch.io/jam/metafest-vr-jam-2)
  - [Jam entry](https://itch.io/jam/metafest-vr-jam-2)
  - A
# Significant platforms
- [itch.io](https://itch.io/)

# SOMething
```javascript
// https://www.codewars.com/kata/52996b5c99fdcb5f20000004/train/javascript
function runoff(voters){
  const getArrayMaximum = (array) => {
    if (array.length === 0) console.error('Array can\'t be empty ');
    
    let max = [array[0]];
    let maxIndex = [0];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        maxIndex = [...maxIndex,i];
        max = [...max, array[i]];
      }
    }
    
    return [maxIndex, max];
  }
  
  const getOverHalfCandidate = (resultArray) => {
    return resultArray.filter((vote) => vote > Math.floor(resultArray.length / 2))
  }
  
  let countVote = Array(5).fill(0);
  // 'a'.charCodeAt() --> 97
  for(let i = 0; i < voters.length; i++) {
    countVote[voters[i][0].charCodeAt() - 97] += 1;
  }
  console.log(countVote)
  console.log(getOverHalfCandidate(countVote));
}
```

# RTFM
- [Blender](https://www.blender.org/get-involved/)

# The ability to accurately estimate the time consumption and cost for travel
- Stores the basic major time chunk spent for

# How long does it take to do \[Input event\]
- Commuting


# Scheduled career related stuffs to do at home
- Book the Stadia service and play it for yourself
  - [GDC 2019谷歌发布会总结 云游戏服务“STADIA”正式公布](http://www.a9vg.com/news/201903/1934124515.html)

