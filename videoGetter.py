from pytube import YouTube as yt
# import yt_dlp as YoutubeDL
# #from youtube_dl import YoutubeDL

args = {}
file = open('wellsfargoVideos.txt', 'r')
links = file.readlines()
print(type(links))
for link in links:
    temp = link.strip()
    print(temp)
    ytObject = yt(temp)
    ytObject.streams.get_highest_resolution().download()


