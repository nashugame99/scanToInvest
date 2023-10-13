from pytube import YouTube as yt
import os
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
    try:
        ytObject.streams.get_highest_resolution().download(os.curdir+ '\\WellsFargo')
    except:
        continue

file = open('starbucksVideos.txt', 'r')
links = file.readlines()
print(type(links))
for link in links:
    temp = link.strip()
    print(temp)
    ytObject = yt(temp)
    try:
        ytObject.streams.get_highest_resolution().download(os.curdir+ '\\Starbucks')
    except:
        continue

file = open('teslaVideos.txt', 'r')
links = file.readlines()
print(type(links))
for link in links:
    temp = link.strip()
    print(temp)
    ytObject = yt(temp)
    try:
        ytObject.streams.get_highest_resolution().download(os.curdir+ '\\Tesla')
    except:
        continue

# file = open('walmartVideos.txt', 'r')
# links = file.readlines()
# print(type(links))
# for link in links:
#     temp = link.strip()
#     print(temp)
#     ytObject = yt(temp)
#     ytObject.streams.get_highest_resolution().download(os.curdir('C:\\Users\\nimis\\PycharmProjects\\pythonProject\\Walmart'))

