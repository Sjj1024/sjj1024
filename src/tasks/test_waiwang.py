import requests

url = "https://www.google.com/"
payload = {}
headers = {
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"'
}
# proxies = {'https': '127.0.0.1:10809'}
# response = requests.request("GET", url, headers=headers, data=payload, proxies=proxies)
# response = requests.request("GET", url, headers=headers, data=payload)
#
# print(response.text)

# 读文件
with open("waiwang_read.txt", "r", encoding="utf-8") as f:
    print(f"外网读取到的文件内容:{f.read()}")

# 写内容
with open("waiwang.txt", "w", encoding="utf-8") as f:
    f.write("写进去的内容")
