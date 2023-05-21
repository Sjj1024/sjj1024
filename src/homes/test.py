"""
执行定时任务获取回家地址，并同步到各端
"""
import base64
import json
from datetime import datetime
from github import Github
from hotbox import hot_urls
from url_list import cate_list
import requests
from bs4 import BeautifulSoup
import re


def get_2048_url():
    url = "https://iyongzhou.com/"
    payload = {}
    headers = {
        'authority': 'iyongzhou.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': 'https://www.google.com/',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    hejidi_soup = BeautifulSoup(response.content.decode("gbk"), "lxml")
    he_ji_1 = hejidi_soup.select("td")[1].select("a")[0].get("href")
    he_ji_2 = hejidi_soup.select("td")[1].select("a")[1].get("href")
    he_ji_3 = hejidi_soup.select("td")[1].select("a")[2].get("href")
    # set_home_source_urls("2048地址1", he_ji_1)
    # set_home_source_urls("2048地址2", he_ji_2)
    # set_home_source_urls("2048地址3", he_ji_3)
    return he_ji_1


if __name__ == '__main__':
    get_2048_url()
