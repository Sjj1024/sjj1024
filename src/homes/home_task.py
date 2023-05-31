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


def get_1024_url():
    url = "https://get.xunfs.com/app/listapp.php"
    payload = {'a': 'get18',
               'system': 'android'}
    headers = {}
    response = requests.request("POST", url, headers=headers, data=payload)
    home_info = response.json()
    cao_liu_1 = f"""https://{home_info["url1"]}/index.php"""
    cao_liu_2 = f"""https://{home_info["url2"]}/index.php"""
    cao_liu_3 = f"""https://{home_info["url3"]}/index.php"""
    set_home_source_urls("1024草榴1", cao_liu_1)
    set_home_source_urls("1024草榴2", cao_liu_2)
    set_home_source_urls("1024草榴3", cao_liu_3)
    return cao_liu_1


def get_91_url():
    url = "https://iwant.better2021life.com/"
    payload = {}
    headers = {
        'user-agent': '91appnew',
        'Cookie': 'CLIPSHARE=5cad4o2tdan5938ls71gshiij0'
    }
    response = requests.get(url, headers=headers, data=payload)
    # print(response.content.decode())
    video91_soup = BeautifulSoup(response.content.decode(), "lxml")
    image_91_1 = video91_soup.select_one("ul.navbar-nav").select("a")[2].get("href") + "/index.php"
    # 从91image获取91视频网站
    image_response = requests.get(image_91_1, headers=headers)
    image_soup = BeautifulSoup(image_response.content.decode(), "lxml")
    video_91_1 = image_soup.select_one("li.menu_6").select_one('a#mn_index').get("href")
    # 从ebay获取91视频地址: https://www.ebay.com/usr/91home
    url = "https://www.ebay.com/usr/91home"
    headers = {
        'authority': 'www.ebay.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': 'https://t0319.91p789.com/',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-full-version': '"111.0.5563.111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-platform': '"Windows"',
        'sec-ch-ua-platform-version': '"10.0.0"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    }
    response_eaby = requests.get(url, headers=headers)
    video_soup = BeautifulSoup(response_eaby.content.decode(), "lxml")
    video_91_2 = video_soup.select_one("span.str-about-description__description").get_text().split("**:")[1].strip()
    video_91_http = video_91_2.replace("www.", "https://")
    set_home_source_urls("91Pr视频1", video_91_1)
    set_home_source_urls("91Pr视频2", video_91_http)
    set_home_source_urls("91Pr图片", image_91_1)
    return video_91_1


def get_98_url():
    data = hot_urls.get("data")
    for i in data:
        if "98色花堂" in i.get("title"):
            return i.get("url")
    return "https://www.hghg58.com"


def get_heiLiao_url():
    url = "https://xxxmmm.email/"
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    hei_soup = BeautifulSoup(response.content.decode(), "lxml")
    hei_url_1 = hei_soup.select_one("div.box-wrap").select("a")[0].get("href")
    hei_url_2 = hei_soup.select_one("div.box-wrap").select("a")[1].get("href")
    hei_url_num = int(re.search(r'\d+', hei_url_1).group(0)) - 1
    hei_url_3 = f"https://zztt{hei_url_num}.com/"
    set_home_source_urls("黑料B打烊1", hei_url_2)
    set_home_source_urls("黑料B打烊2", hei_url_1)
    set_home_source_urls("黑料B打烊3", hei_url_3)
    return hei_url_1


def get_javbus_url():
    url = "https://www.javbus.com/"
    headers = {
        'authority': 'www.javbus.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'cookie': 'PHPSESSID=q84n4fuc37akfciuebmktc1p15; existmag=mag',
        'pragma': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
    }
    response = requests.request("GET", url, headers=headers)
    javbus_soup = BeautifulSoup(response.content.decode(), "lxml")
    jav_bus_1 = javbus_soup.select("div.col-xs-12")[1].get_text().split("：")[1].strip()
    jav_bus_2 = javbus_soup.select("div.col-xs-12")[2].get_text().split("：")[1].strip()
    jav_bus_3 = javbus_soup.select("div.col-xs-12")[3].get_text().split("：")[1].strip()
    set_home_source_urls("JavBus网1", jav_bus_1)
    set_home_source_urls("JavBus网2", jav_bus_2)
    set_home_source_urls("JavBus网3", jav_bus_3)
    return jav_bus_1


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
    # he_ji_1 = "https://bd.sparklen.com/"
    # he_ji_2 = "https://bd.phamar.com/"
    # he_ji_3 = "https://bd.hg99555.com/"
    set_home_source_urls("2048地址1", he_ji_1)
    set_home_source_urls("2048地址2", he_ji_2)
    set_home_source_urls("2048地址3", he_ji_3)
    return he_ji_1


def get_cate_list():
    # get_1024_url()
    # get_91_url()
    # get_heiLiao_url()
    # get_javbus_url()
    # get_2048_url()
    fun_list = [get_1024_url, get_91_url, get_heiLiao_url, get_javbus_url, get_2048_url]
    for fun in fun_list:
        try:
            fun()
        except Exception as e:
            print(f"函数出错了:{e}")
            continue
    cate_list["hotbox"] = hot_urls
    return cate_list


def read_daohang_html(template):
    with open(f"src/homes/replace_html/{template}", "r", encoding="utf-8") as f:
        return f.read()


# 将热门推荐保存为html页面让android使用
def url_to_android_html(more_info):
    # 先将热门导航里面的内容通过模板写入到daohang.html中
    """
      <div class="tabBox">
        <h3 class="tabTitle">热门推荐</h3>
        <div class="aBox">
          <a href="https://www.baidu.com/" class="alink" target="_blank">百度一下</a>
        </div>
      </div>
    """
    # 提示的内容
    guide_div_str = f"""<div class="guide-time">地址更新时间：{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</div>"""
    tips_div_str = f"""<div class="tips">{more_info}</div>"""
    tab_box_list = [guide_div_str, tips_div_str]
    cate_lists = get_cate_list()
    for key, val in cate_lists.items():
        # print(f"{key} : {val}")
        title = val["title"]
        data_url = val["data"]
        a_box_list = []
        for url_a in data_url:
            a_template = f"""<a href="{url_a["url"]}" class="alink" target="_blank">{url_a["title"]}</a>\n"""
            a_box_list.append(a_template)
        a_box_strs = "".join(a_box_list)
        tab_box_template = f"""<div class="tabBox">
            <h3 class="tabTitle">{title}</h3>
            <div class="aBox">
              {a_box_strs}
            </div>
          </div>"""
        tab_box_list.append(tab_box_template)
    tab_box_strs = "".join(tab_box_list)
    daohang_html = read_daohang_html("daohang_app_template.html")
    daohang_html_res = daohang_html.replace("templatePalace", tab_box_strs)
    android_release_path = "src/homes/release_html/daohang_app_releases.html"
    with open(android_release_path, "w", encoding="utf-8") as f:
        f.write(daohang_html_res)
    # 同步到github，用于测试预览效果是否正确
    # 同步到github中
    android_release_path = android_release_path.replace("src/homes/", "")
    put_github_file(android_release_path, daohang_html_res)
    return daohang_html_res


# 将热门推荐保存为html页面让web网页使用
def url_to_web_html(more_info):
    # 先将热门导航里面的内容通过模板写入到daohang.html中
    """
      <div class="tabBox">
        <h3 class="tabTitle">热门推荐</h3>
        <div class="aBox">
          <a href="https://www.baidu.com/" class="alink" target="_blank">百度一下</a>
        </div>
      </div>
    """
    # 头部内容
    # 提示的内容
    guide_div_str = f"""<div class="guide-time">地址更新时间：{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</div>"""
    tips_div_str = f"""<div class="tips">{more_info}</div>"""
    header_guide = f"""
    <div class="tabBox">
        <h3 class="tabTitle tabTop">1024回家PWA版</h3>
        <div class="testBox">
            <div class="btnBox">
                <a class="btn" id="android" href="https://1024huijia.github.io/TestSome/sources/1024回家.apk" target="_blank">安卓APP</a>
                <a class="btn" id="windows" href="https://1024huijia.github.io/TestSome/sources/Windows.zip" target="_blank">Windows</a>
                <a class="btn" id="macbook" href="https://1024huijia.github.io/TestSome/sources/Mac电脑.zip" target="_blank">Mac电脑</a>
                <a class="btn" id="windows" href="https://1024huijia.github.io/TestSome/sources/浏览器插件.zip" target="_blank">Chrome插件</a>
                <a class="btn" id="macbook" href="https://1024huijia.github.io/TestSome/sources/油猴脚本.zip" target="_blank">油猴脚本</a>
                <a class="btn" id="iphone" href="https://1024huijia.github.io/QingChunMeizi/iPhoneHuijia2.4t05rnrwiku0.webp" target="_blank">iPhone版</a>
                <a class="btn" id="yongjiu" href="https://github.com/1024huijia/GoHome" target="_blank">永久地址</a>
                <a class="btn" id="windows" href="https://t.me/+6Ycya_xTgsA2NGNl" target="_blank">Telegram群组</a>
                <a class="btn" id="macbook" href="https://twitter.com/1024huijia?s=21" target="_blank">Twitter推特</a>
            </div>
            {guide_div_str}
            {tips_div_str}
        </div>
    </div>
    """
    tab_box_list = [header_guide]
    cate_lists = get_cate_list()
    for key, val in cate_lists.items():
        # print(f"{key} : {val}")
        title = val["title"]
        data_url = val["data"]
        a_box_list = []
        for url_a in data_url:
            a_template = f"""<a href="{url_a["url"]}" class="alink" target="_blank">{url_a["title"]}</a>\n"""
            a_box_list.append(a_template)
        a_box_strs = "".join(a_box_list)
        tab_box_template = f"""<div class="tabBox">
            <h3 class="tabTitle">{title}</h3>
            <div class="aBox">
              {a_box_strs}
            </div>
          </div>"""
        tab_box_list.append(tab_box_template)
    tab_box_strs = "".join(tab_box_list)
    daohang_html = read_daohang_html("daohang_web_template.html")
    daohang_html_res = daohang_html.replace("templatePalace", tab_box_strs)
    web_release_path = "src/homes/release_html/daohang_web_releases.html"
    with open(web_release_path, "w", encoding="utf-8") as f:
        f.write(daohang_html_res)
    # 同步到github，用于测试预览效果是否正确
    # 同步到github中
    web_release_path = "web.html"
    put_github_file(web_release_path, daohang_html_res)
    # 同步daohang_web_releases.html
    daohang_web_html = daohang_html_res.replace("isInStandaloneMode()", "true")
    web_release_path = "release_html/daohang_web_releases.html"
    put_github_file(web_release_path, daohang_web_html)
    # 同步发布页到网站
    huijia_path = "src/homes/release_html/huijia.html"
    with open(huijia_path, "r", encoding="utf-8") as f:
        # 将地址替换为有效地址
        html_content = f.read()
        caoliuHome = get_1024_url()
        jiuyiHome = get_91_url()
        jiubaHome = get_98_url()
        heiliaoHome = get_heiLiao_url()
        home2048 = get_2048_url()
        html_content = html_content.replace("caoliuHome", caoliuHome)
        html_content = html_content.replace("91Home", jiuyiHome)
        html_content = html_content.replace("98Home", jiubaHome)
        html_content = html_content.replace("heiliaoHome", heiliaoHome)
        html_content = html_content.replace("2048Home", home2048)
        put_github_file("huijia.html", html_content)
    return daohang_html_res


# 从热门推荐里面能获取指定的url
def get_home_from_urls(key):
    hot_homes = hot_urls.get("data")
    for home in hot_homes:
        if home.get("title") == key:
            return home.get("url")
    raise Exception(f"没有找到对应的地址:{key}")


def set_home_source_urls(key, val):
    hot_homes = hot_urls.get("data")
    for home in hot_homes:
        if home.get("title") == key:
            home["url"] = val
            return
    raise Exception(f"没有找到对应的地址:{key}")


# 安卓app页面里面替换指定的网页内容
def cao_app_exe_page(html_path):
    with open(f"src/homes/replace_html/{html_path}", "r", encoding="utf-8") as f:
        content_html = f.read()
        content_html = content_html.replace("""<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<body>""", "")
        content_html = content_html.replace("""</body>
</html>""", "")
        return content_html


# iPhoneJs和油猴用的页面
def url_to_iphone(more_info, is_iphone=True):
    # 先将热门导航里面的内容通过模板写入到daohang.html中
    """
      <div class="tabBox">
        <h3 class="tabTitle">热门推荐</h3>
        <div class="aBox">
          <a href="https://www.baidu.com/" class="alink" target="_blank">百度一下</a>
        </div>
      </div>
    """
    # 提示的内容
    guide_div_str = f"""<div class="guide-time">地址更新时间：{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</div>"""
    tips_div_str = f"""<div class="tips">{more_info}</div>"""
    # 功能区按钮：安卓版，win版等
    btn_buttons = f"""<div class="tabBox">
            <h3 class="tabTitle tabTop">1024回家iPhone版V0.1</h3>
            <div class="testBox">
                <div class="btnBox">
                    <button class="btn" id="android">安卓APP</button>
                    <button class="btn" id="windows">Windows</button>
                    <button class="btn" id="macbook">Mac电脑</button>
                    <button class="btn" id="iphone">iPhone版</button>
                    <button class="btn" id="yongjiu">永久地址</button>
                  <a style="text-decoration: none;" href="https://twitter.com/1024huijia?s=21" target="_blank">
                    <button class="btn" style="text-decoration: none;">Twitter推特</button>
                  </a>
                  <a style="text-decoration: none;" href="https://t.me/+6Ycya_xTgsA2NGNl" target="_blank">
                    <button class="btn" style="text-decoration: none;">Telegram群组</button>
                    </a>
                    <button class="btn" id="share">分享应用</button>
                </div>
                {guide_div_str}
                {tips_div_str}
            </div>
          </div>"""
    tab_box_list = [btn_buttons]
    cate_lists = get_cate_list()
    for key, val in cate_lists.items():
        # print(f"{key} : {val}")
        title = val["title"]
        data_url = val["data"]
        a_box_list = []
        for url_a in data_url:
            a_template = f"""<a href="{url_a["url"]}" class="alink" target="_blank">{url_a["title"]}</a>\n"""
            a_box_list.append(a_template)
        a_box_strs = "".join(a_box_list)
        tab_box_template = f"""<div class="tabBox">
                <h3 class="tabTitle">{title}</h3>
                <div class="aBox" >
                  {a_box_strs}
                </div>
              </div>"""
        tab_box_list.append(tab_box_template)
    tab_box_strs = "".join(tab_box_list)
    daohang_html = read_daohang_html("daohang_iphone_template.html")
    daohang_html_res = daohang_html.replace("templatePalace", tab_box_strs)
    iphone_release_path = "src/homes/release_html/daohang_iphone_releases.html"
    with open(iphone_release_path, "w", encoding="utf-8") as f:
        f.write(daohang_html_res)
    # 同步到github，用于测试预览效果是否正确
    iphone_release_path = iphone_release_path.replace("src/homes/", "")
    put_github_file(iphone_release_path, daohang_html_res)
    # 同步到iphone端的内容
    if is_iphone:
        iphone_html = daohang_html_res.replace("""<!DOCTYPE html>
    <html>""", "").replace("</html>", "")
        return iphone_html
    else:
        return daohang_html_res


def get_app_files():
    print("生成安卓app配置")
    """
    三个地址:
    github:https://api.github.com/repos/Sjj1024/Sjj1024/contents/.github/hubsql/appHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/16965757.html
    CSDN:https://blog.csdn.net/weixin_44786530/article/details/129348208
    """
    app_info = {
        "name": "Android1024",
        "version": 3.1,
        "update": True,
        "file_path": ".github/hubsql/appHuijia.txt",
        "upcontent": "增加了JavBus和2048地址，修复91论坛地址获取失败问题。升级有问题请加QQ/微信：2950525265",
        "upurl": "https://www.cnblogs.com/sdfasdf/p/16965757.html",
        "showmessage": False,
        "message": "这是最新版本，增加了返回按钮",
        "message_url": "",
        "interval": 10,  # 刷贡献的时间间隔/每多少小时刷一次
        "brush_rate": 10,  # 刷贡献的百分比，越大越容易触发刷
        "brush_all": True,  # 是否全部刷，只要是headers里面的，就都刷？
        # 分享的内容
        "more_urls": "1024回家：https://1024huijia.github.io/TestSome/huijia.html",
        # 更多推荐页面
        "more_html": url_to_android_html(
            """<span style="color: red;">提示: 部分网站可能需要VPN翻墙后访问，寻找能长期提供草榴邀请码/98邀请码/91邀请码的朋友合作：1024huijia@gmail.com</span>"""),
        "headers": "/index.php?u=628155&ext=9a511;/index.php?u=52993&ext=99ea2;/index.php?u=595394&ext=c180e;/index.php?u=384581&ext=26585;/index.php?u=627793&ext=09126",
        "about": f"""
         1.如果你想感谢我，请合理打赏吧，<br>我的比特币账户：<span style="padding: 0 5px 0 2px;word-wrap: break-word;">3HJTSzf2GL7Bj8r7HakUNS1G9jauemk1Lt</span><br>我的以太坊账户：<span style="padding: 0 5px 0 2px;word-wrap: break-word;">0xb9061992ea948e247a4542209c14c5e7ea79afc6</span><br>
         2.1024回家浏览器插件：<a href="https://wwlu.lanzoum.com/iFf8C0tl449i" style="text-decoration: none;" >1024回家Chrome插件</a><br>
         3.1024回家油猴脚本：<a href="https://wwlu.lanzoum.com/ik0TD0tl9cjg" style="text-decoration: none;" >1024回家油猴脚本</a><br>
         4.1024回家Windows：<a href="https://wwlu.lanzoum.com/iRQCb0tl5zta" style="text-decoration: none;" >1024回家Win桌面</a><br>
         5.1024回家Macbook：<a href="https://wwlu.lanzoum.com/iNtOg0tl448h" style="text-decoration: none;" >1024回家Mac桌面</a><br>
         6.1024回家iPhone端：<a href="https://1024huijia.github.io/QingChunMeizi/iPhoneHuijia2.4t05rnrwiku0.webp" style="text-decoration: none;" >1024回家苹果iPhone</a><br>
         6.1024回家推特：<a href="https://twitter.com/1024huijia?s=21" style="text-decoration: none;" >1024回家推特</a><br>
         6.1024回家Tg群组：<a href="https://t.me/+6Ycya_xTgsA2NGNl" style="text-decoration: none;" >1024回家Tg群组</a><br>
         7.本APP永久停止更新！愿你安好！
        """,
        "header_ms": "这里总有你想看的吧",  # 这是app菜单栏头部
        "header_url": "",  # 点击头部显示的跳转
        "caoliu_url1": get_home_from_urls("1024草榴1"),  # 草榴免翻地址
        "caoliu_url2": get_home_from_urls("1024草榴2"),  # 草榴免翻地址
        "caoliu_url3": get_home_from_urls("1024草榴3"),  # 草榴免翻地址
        "article_ad": "",
        "commit_ad": "寻找能长期提供草榴邀请码/98邀请码/91邀请码的朋友合作：1024huijia@gmail.com",  # 草榴评论区广告，支持html
        # 注册页面中，需要邀请码的提示语，为空则什么都不提示
        "mazinote": "得邀请码QQ/微信:2950525265",
        "porn_video_app": "https://its.better2021app.com",  # 91视频地址
        "porn_video_url": get_home_from_urls("91Pr视频1"),  # 91视频地址
        "porn_video_1ad": "",
        "porn_video_2ad": "",
        "porn_video_3ad": "",
        "porn_video_4ad": "",
        "porn_video_5ad": "",
        # 也是98色花堂首页的头部广告内容
        "porn_video_6ad": "",
        "porn_video_footer": "",
        "porn_image_url": get_home_from_urls("91Pr图片"),  # 91图片区地址
        "porn_photo_header": "",
        "porn_photo_header2": "",
        "porn_photo_footer": "",
        "porn_photo_wentou": "",
        "porn_vip_page": cao_app_exe_page("porn_vip_page.html"),
        "heiliao_url1": get_home_from_urls("黑料B打烊1"),  # 黑料免翻地址
        "heiliao_url2": get_home_from_urls("黑料B打烊2"),  # 黑料免翻地址
        "heiliao_url3": get_home_from_urls("黑料B打烊3"),  # 黑料免翻地址
        "heiliao_header": "",
        "heiliao_footer": "",
        "heiliao_artical": "",
        "sehuatang1": get_home_from_urls("98色花堂1"),
        "sehuatang2": get_home_from_urls("98色花堂2"),
        "sehuatang3": get_home_from_urls("98色花堂3"),
        "javbus1": get_home_from_urls("JavBus网1"),
        "javbus2": get_home_from_urls("JavBus网2"),
        "javbus3": get_home_from_urls("JavBus网3"),
        "luntan20481": get_home_from_urls("2048地址1"),
        "luntan20482": get_home_from_urls("2048地址2"),
        "luntan20483": get_home_from_urls("2048地址3")
    }
    return app_info


def get_iphone_files():
    print("生成iphone配置")
    """
    iPhone插件内容
    github:https://api.github.com/repos/Sjj1024/Sjj1024/contents/.github/hubsql/iphoneHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/16966745.html
    CSDN:https://xiaoshen.blog.csdn.net/article/details/129709226
    """
    iphone_home = {
        "name": "IPhone1024",
        "file_path": ".github/hubsql/iphoneHuijia.txt",
        "version": 0.1,
        "dialog": {
            "show": False,
            "content": "这是弹窗信息"
        },
        "update": {
            "show": False,
            "content": "更新了更高级的信息",
            "url": "https://www.jsons.cn/base64/"
        },
        "data": {
            "interval": 10,  # 刷贡献速率，几个小时刷一次
            "brush_rate": 30,  # 刷贡献的百分比，越大越容易触发开刷
            "brush_all": False,  # 是否全部刷，只要是headers里面的，就都刷？
            "show_hotUrl": True,  # 是否在热门推荐的URl地址中展示
            # 刷贡献的头部，三个地址平均分布一个
            "GongXians": ["/index.php?u=628155&ext=9a511", "/index.php?u=529913&ext=99ea2",
                          "/index.php?u=595394&ext=c180e"],
            # 匹配cookie的规则
            "cookieRule": {"clcookies": "227c9_winduser",
                           "91VideoCookies": "USERNAME",
                           "91ImgCookies": "CzG_auth",
                           "98cookies": "cPNj_2132_auth"},
            # 其他回家客户端下载
            "yongjiu": "永久地址: https://1024huijia.github.io/TestSome/huijia.html",
            "android": "安卓APP：https://1024huijia.github.io/TestSome/sources/1024回家.apk",
            "windows": "https://1024huijia.github.io/TestSome/sources/Windows.zip",
            "macbook": "Mac电脑：https://1024huijia.github.io/TestSome/sources/Mac电脑.zip",
            "chrome": "https://1024huijia.github.io/TestSome/sources/浏览器插件.zip",
            "monkey": "https://1024huijia.github.io/TestSome/sources/油猴脚本.zip",
            "iphone": "iPhone：加微信或者QQ：2950525265购买安装指导",
            "share": "1024回家：https://1024huijia.github.io/TestSome/huijia.html",
        },
        # 其中的内容是消息提醒内容
        "content": url_to_iphone(
            """<span>提示: 部分网站可能需要VPN翻墙后访问，寻找能长期提供草榴邀请码/98邀请码/91邀请码的朋友合作：1024huijia@gmail.com</span>""",
            True)
    }
    return iphone_home


def get_chrome_files():
    print("生成chrome 配置")
    # 以下是1024回家插件的数据信息
    """
    三个地址:
    github:https://api.github.com/repos/Sjj1024/Sjj1024/contents/.github/hubsql/chromHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/15115801.html
    CSDN:https://xiaoshen.blog.csdn.net/article/details/129345827
    """
    chrome_extension = {
        "name": "Chrome1024",
        "file_path": ".github/hubsql/chromHuijia.txt",
        "version": 0.1,
        # 实验功能访问密码
        "password": "521121",
        "dialog": {
            "show": False,
            "content": "这是弹窗信息",
            "url": "http://www.jsons.cn/base64/"
        },
        "update": {
            "show": True,
            "content": "更新了更高级的信息",
            "url": "http://www.jsons.cn/base64/"
        },
        "data": {
            "interval": 10,  # 展示在草榴URL上的贡献链接
            "brush_rate": 10,  # 刷贡献的百分比，越大越容易触发刷
            "brush_all": False,  # 是否全部刷，只要是headers里面的，就都刷？
            "show_hotUrl": True,  # 是否在热门推荐的URl地址中展示
            # 刷贡献的头部，三个地址平均分布一个
            "GongXians": ["/index.php?u=628155&ext=9a511", "/index.php?u=529913&ext=99ea2",
                          "/index.php?u=595394&ext=c180e"],
            # 匹配cookie的规则
            "cookieRule": {"clcookies": "227c9_winduser",
                           "91VideoCookies": "USERNAME",
                           "91ImgCookies": "CzG_auth",
                           "98cookies": "cPNj_2132_auth"},
            # 更多消息提醒
            "more_info": f"""<div style="color: red;"><span style="color: red;">提示: 部分网站可能需要VPN翻墙后访问，寻找能长期提供草榴邀请码/98邀请码/91邀请码的朋友合作：1024huijia@gmail.com</span>，如果你想感谢我，
    我的比特币账户：<span style="padding: 0 5px 0 2px;">3HJTSzf2GL7Bj8r7HakUNS1G9jauemk1Lt</span>我的以太坊账户：<span style="padding: 0 5px 0 2px;">0xb9061992ea948e247a4542209c14c5e7ea79afc6</span></div>
            """,
            # 其他回家客户端下载
            "yongjiu": "https://1024huijia.github.io/TestSome/huijia.html",
            "android": "https://1024huijia.github.io/TestSome/sources/1024回家.apk",
            "windows": "https://1024huijia.github.io/TestSome/sources/Windows.zip",
            "macbook": "https://1024huijia.github.io/TestSome/sources/Mac电脑.zip",
            "chrome": "https://1024huijia.github.io/TestSome/sources/浏览器插件.zip",
            "monkey": "https://1024huijia.github.io/TestSome/sources/油猴脚本.zip",
            "iphone": "https://1024huijia.github.io/QingChunMeizi/iPhoneHuijia2.4t05rnrwiku0.webp",
            "share": "老司机来了：https://1024huijia.github.io/TestSome/huijia.html",
            # 购买邀请码功能: 后面再做，先做桌面端
            "open_pay": {
                "open": False,
                "pay_ma": "老司机来了：http://www.jsons.cn/base64/"
            },
            # 过滤广告或者添加广告配置
            "filter_all": {
                "doumei": {
                    "filter": True,
                    "down": """<a href="https://www.baidu.com/">百度一下</a>"""
                },
                "caoliu": {
                    "filter": False,  # 广告开关
                    "invcode_info": "1024邀请码:请加微信",
                    "article_tip0": "1024邀请码:请加微信0",
                    "article_tip1": "1024邀请码:请加微信1",
                    "article_tip2": """<a href="https://www.baidu.com/">百度一下1024</a>""",
                    "article_tip3": "1024邀请码:请加微信3",
                    "article_tip4": "1024邀请码:请加微信4",
                    "article_tip5": "1024邀请码:请加微信5",
                    "sptable_footer": "1024邀请码:请加微信sptable_footer",
                    "article_hd": "1024邀请码:请加微信article_hd",
                    "article_ad": "1024邀请码:请加微信article_ad",
                    "app_exe_down_page": cao_app_exe_page("caoliu_app_exe_page.html"),
                    "appDownNa": """<a href="https://www.baidu.com/" target="_blank">下载91APP</a>""",
                },
                "91video": {
                    "filter": False,  # 广告开关
                    "invcode_info": "91邀请码:请加微信",
                    "page_header_ad": "91屏蔽头部广告",
                    "video_header_ad1": "91屏蔽视频头部广告1",
                    "video_header_ad2": "91屏蔽视频头部广告2",
                    "rightFirstAd": "91侧边栏第一个广告",
                    "appDownLiBox": """<a href="https://www.baidu.com/" target="_blank">下载91APP</a>""",
                    "iframeBoxsShow": True
                },
                "91image": {
                    "filter": False,  # 广告开关
                    "invcode_info": "邀请码:91请加微信",
                    "app_exe_down_page": cao_app_exe_page("porn_app_down.html"),
                    "porn_vip_page": cao_app_exe_page("porn_vip_page.html"),
                    "appDownLiBox": """<a href="https://www.baidu.com/" target="_blank">下载91APP</a>""",
                },
                "tang98": {
                    "filter": False,  # 广告开关
                    "invcode_info": "邀请码:请加微信",
                    "headerAd": "98头部广告",
                    "footerAd": "98屏蔽页脚底部广告",
                    "listFootAd": "98文章列表页底部内容",
                    "articleFooterAd": "98文章详情页底部广告",
                    "commitAds0": "98评论区广告0",
                    "commitAds1": "98评论区广告1",
                    "appDownLiBox": """<a href="https://www.baidu.com/" target="_blank">下载98APP</a>""",
                },
                "heiliao": {
                    "filter": False,  # 广告开关
                    "invcode_info": "邀请码:请加微信",
                    "headerAd": "98头部广告",
                    "appDownLiBox": """<a class="nav-link" href="/category/1.html">下载黑料APP</a>""",
                    "articleLikeAd0": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleLikeAd1": """<a class="nav-link" href="/category/1.html">下载黑料APP1</a>""",
                    "articleLikeAd2": """<a class="nav-link" href="/category/1.html">下载黑料APP2</a>""",
                    "articleLikeAd3": """<a class="nav-link" href="/category/1.html">下载黑料APP3</a>""",
                    "articleLikeAd4": """<a class="nav-link" href="/category/1.html">下载黑料APP4</a>""",
                    "articleHeaderAd0": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd1": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd2": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd3": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd4": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd5": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd6": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd7": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                    "articleHeaderAd9": """<a class="nav-link" href="/category/1.html">下载黑料APP0</a>""",
                },
                "pornhub": {
                    "filter": False,  # 广告开关
                    "invcode_info": "邀请码:请加微信",
                    "headerAd": "98头部广告",
                    "appDownLiBox": """<a class="nav-link" href="/category/1.html">下载黑料APP</a>""",
                },
                "baidu": {
                    "filter": False,
                    "appDownLiBox": """<a class="nav-link" href="/category/1.html">下载黑料APP</a>"""
                }
            },
            # 导航链接更新时间
            "guide_time": f"""地址更新时间：{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}""",
            # 更多导航列表
            "navigation": cate_list
        }
    }
    return chrome_extension


def get_desktop_files():
    print("生成desktop配置")
    # 以下是1024回家跨平台桌面软件
    """
    三个地址:
    github:https://api.github.com/repos/Sjj1024/Sjj1024/contents/.github/hubsql/deskHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/16101765.html
    CSDN:https://xiaoshen.blog.csdn.net/article/details/129388703
    """
    desk_platform = {
        "name": "Desk1024",
        "file_path": ".github/hubsql/deskHuijia.txt",
        "version": 0.1,
        # 实验功能访问密码
        "password": "521121",
        "dialog": {
            "show": False,
            "content": "这是弹窗信息",
            "url": "http://www.jsons.cn/base64/"
        },
        "update": {
            "show": True,
            "content": "更新了更高级的信息",
            "url": "http://www.jsons.cn/base64/"
        },
        "data": {
            "interval": 10,  # 展示在草榴URL上的贡献链接
            "brush_rate": 10,  # 刷贡献的百分比，越大越容易触发刷
            "brush_all": False,  # 是否全部刷，只要是headers里面的，就都刷？
            "show_hotUrl": True,  # 是否在热门推荐的URl地址中展示
            # 刷贡献的头部，三个地址平均分布一个
            "GongXians": ["/index.php?u=628155&ext=9a511", "/index.php?u=529913&ext=99ea2",
                          "/index.php?u=595394&ext=c180e"],
            # 更多消息提醒
            "more_info": f"""<div style="color: red;"><span style="color: red;">提示: 部分网站可能需要VPN翻墙后访问，寻找能长期提供草榴邀请码/98邀请码/91邀请码的朋友合作：1024huijia@gmail.com</span>，如果你想感谢我，
            我的比特币账户：<span style="padding: 0 5px 0 2px;">3HJTSzf2GL7Bj8r7HakUNS1G9jauemk1Lt</span>我的以太坊账户：<span style="padding: 0 5px 0 2px;">0xb9061992ea948e247a4542209c14c5e7ea79afc6</span></div>
    """,
            # 其他回家客户端下载
            "yongjiu": "https://1024huijia.github.io/TestSome/huijia.html",
            "android": "https://1024huijia.github.io/TestSome/sources/1024回家.apk",
            "windows": "https://1024huijia.github.io/TestSome/sources/Windows.zip",
            "macbook": "https://1024huijia.github.io/TestSome/sources/Mac电脑.zip",
            "chrome": "https://1024huijia.github.io/TestSome/sources/浏览器插件.zip",
            "monkey": "https://1024huijia.github.io/TestSome/sources/油猴脚本.zip",
            "iphone": "https://1024huijia.github.io/QingChunMeizi/iPhoneHuijia2.4t05rnrwiku0.webp",
            "share": "老司机来了：https://1024huijia.github.io/TestSome/huijia.html",
            # 购买邀请码功能: 后面再做，先做桌面端
            "open_pay": {
                "open": False,
                "pay_ma": "老司机来了：http://www.jsons.cn/base64/"
            },
            # 导航链接更新时间
            "guide_time": f"""地址更新时间：{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}""",
            # 更多导航列表
            "navigation": cate_list
        }
    }
    return desk_platform


def encode_json(info):
    print("将各端配置编码")
    jsonStr = json.dumps(info)
    b_encode = base64.b64encode(jsonStr.encode("utf-8"))
    bs64_str = b_encode.decode("utf-8")
    realContent = f"VkdWxlIGV4cHJlc3Npb25z{bs64_str}VkdWxlIGV4cHJlc3Npb25z"
    # print(f"加密结果:\n{realContent}")
    # print(f"博客园加密：")
    # print(f"""
    # <div style="display: none">{realContent}</div>
    # """)
    return realContent


def save_encode_content_html(app_type, content):
    with open("src/homes/replace_html/encode_content_template.html", "r", encoding="utf-8") as f:
        template = f.read()
        content_html = template.replace("encodeContent", content)
        release_path = f"src/homes/release_html/boke_content_{app_type}.html"
        with open(release_path, "w", encoding="utf-8") as res:
            res.write(content_html)
        # 同步到github中
        release_path = release_path.replace("src/homes/", "")
        put_github_file(release_path, content_html)


def put_readme_file(app_file):
    # 读取readme内容同步到git中
    with open("src/homes/README.md", "r", encoding="utf-8") as f:
        readme_content = f.read()
        readme_content = readme_content.replace("caoliu", app_file.get("caoliu_url1"))
        readme_content = readme_content.replace("91video", app_file.get("porn_video_url"))
        print("put_github_file README...")
        put_github_file("README.md", readme_content)
        # 同步GoHome仓库的Readme文件
        print("GOHOME README...")
        GIT_HOME = "1024huijia/GoHome"
        g_home = Github(GIT_TOKEN)
        go_home = g_home.get_repo(GIT_HOME)
        try:
            res = go_home.get_contents("README.md")
            res = go_home.update_file("README.md", "更新地址内容", readme_content, res.sha)
            print(f"GOHOME更新文件结果:{res}")
        except Exception:
            print("GOHOME文件不存在,开始创建...")
            res = go_home.create_file("README.md", "添加一个新文件", readme_content)
            print(res)


def put_github_file(path, content, commit=""):
    print("判断文件是否存在，存在就更新，不存在就增加")
    try:
        res = repo.get_contents(path)
        res = repo.update_file(path, "更新插件内容", content, res.sha)
        print(f"更新文件结果:{res}")
    except Exception:
        print("文件不存在,开始创建...")
        res = repo.create_file(path, "添加一个新文件", content)
        print(res)


def print_git_path():
    print(f"""
    Android三个地址:
    github:https://api.github.com/repos/{GIT_REPO}/contents/.github/hubsql/appHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/16965757.html
    CSDN:https://blog.csdn.net/weixin_44786530/article/details/129348208

    iPhone插件内容
    github:https://api.github.com/repos/{GIT_REPO}/contents/.github/hubsql/iphoneHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/16966745.html
    CSDN:https://xiaoshen.blog.csdn.net/article/details/129709226

    Chrome三个地址:
    github:https://api.github.com/repos/{GIT_REPO}/contents/.github/hubsql/chromHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/15115801.html
    CSDN:https://xiaoshen.blog.csdn.net/article/details/129345827

    DeskTop三个地址:
    github:https://api.github.com/repos/{GIT_REPO}/contents/.github/hubsql/deskHuijia.txt
    博客园:https://www.cnblogs.com/sdfasdf/p/16101765.html
    CSDN:https://xiaoshen.blog.csdn.net/article/details/129388703
    """)


def run():
    print("开始获取地址")
    # 获取热门地址
    get_cate_list()
    # 组装各端配置信息
    app_file = get_app_files()
    iphone_file = get_iphone_files()
    chrome_file = get_chrome_files()
    desktop_file = get_desktop_files()
    # 生成加密内容分发到git
    for app in [app_file, iphone_file, chrome_file, desktop_file]:
        file_path = app.get("file_path")
        # print(f"原始信息:{app}")
        content = encode_json(app)
        name = app.get("name")
        # print(f"{name} 加密后的数据是: {content}")
        save_encode_content_html(name, content)
        put_github_file(file_path, content)
    # 同步web端发布
    url_to_web_html(
        """<span style="color: red;">提示: 部分网站可能需要VPN翻墙后访问，网页版并不稳定，请下载对应的安卓/苹果iPhone/Windows/Mac/浏览器插件/客户端后稳定使用</span>""")
    # 同步readme文档
    put_readme_file(app_file)
    print_git_path()


"""
提示: 部分网站可能需要VPN翻墙后访问，大量收购草榴/98堂/91邀请码，或投稿送码/或相互交换。可邮件联系合作：1024huijia@gmail.com
提示: 部分网站可能需要VPN翻墙后访问
"""

if __name__ == '__main__':
    GIT_REPO = "1024huijia/TestSome"
    GIT_TOKEN = "ghp_888LSkJC7DbB8pgMw6mynhQGLienoPv4P0pOLZ0".replace("888", "")
    g = Github(GIT_TOKEN)
    repo = g.get_repo(GIT_REPO)
    run()
