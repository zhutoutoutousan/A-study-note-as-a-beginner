# 2021/6/25
## Combine audio m4a and video mkv
https://video.stackexchange.com/questions/11898/merge-mp4-with-m4a
https://www.videohelp.com/software/MP4Muxer

```
ffmpeg -i video.mp4 -i audio.m4a -c copy output.mp4
```