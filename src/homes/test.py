import requests

url = "https://www.hghg58.com/misc.php?mod=swfupload&action=swfupload&operation=upload&fid=50"

payload = {'uid': '418590',
           'hash': '07a7d3e53bd51626afda8f0b77342c86',
           'type': 'image',
           'filetype': 'image/jpeg',
           'size': '114089'}
files = [
    ('Filedata', ('10001.jpg', open('10012.jpg', 'rb'), 'image/jpeg'))
]
headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Cookie': '_safe=vqd37pjm4p5uodq339yzk6b7jdt6oich; cPNj_2132_atarget=1; cPNj_2132_lastfp=66abe79b56fe4d1db0defa055279da8b; cPNj_2132_smile=1D1; cPNj_2132_nofavfid=1; cPNj_2132_resendemail=1679713392; PHPSESSID=7djspibh5jpi4171lgd9v626pt; cPNj_2132_secqaaqSAmbi0=5813.11e7d3d12c2ffefbf9; cPNj_2132_home_diymode=1; cPNj_2132__refer=%252Fhome.php%253Fmod%253Dspacecp%2526ac%253Dusergroup; cPNj_2132_checkfollow=1; cPNj_2132_lastcheckfeed=418590%7C1680927923; cPNj_2132_saltkey=OIWUctit; cPNj_2132_lastvisit=1680915276; cPNj_2132_auth=586an1vMudyT%2BuJuhi4DNyyFq9HoVTll6YyPLSbWDApRUaCmu6W8UhqqhxZCytG%2FjmytzS8EG6qdCxJ8TTt58oz4fF8; cPNj_2132_sid=0; cPNj_2132_lip=101.86.79.224%2C1680927923; cPNj_2132_st_p=418590%7C1681083692%7Cd130bf416b92725b8630049d3541e671; cPNj_2132_visitedfid=50D49D48D95D143D142D166D165D117D125; cPNj_2132_viewid=tid_1254069; cPNj_2132_ulastactivity=1681101471%7C0; cPNj_2132_noticeTitle=1; cPNj_2132_forum_lastvisit=D_141_1681008347D_155_1681008371D_125_1681008824D_117_1681010435D_143_1681011436D_165_1681011615D_166_1681011756D_142_1681011785D_95_1681041711D_48_1681047307D_49_1681047319D_50_1681101510; cPNj_2132_st_t=418590%7C1681101511%7Ced78acbce8fed98f6c176515627bce9c; cPNj_2132_lastact=1681101512%09misc.php%09patch; cPNj_2132_lastact=1681101712%09misc.php%09swfupload; cPNj_2132_sid=0',
    'Origin': 'https://www.hghg58.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.hghg58.com/forum.php?mod=post&action=newthread&fid=50',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"'
}

response = requests.post(url, headers=headers, data=payload, files=files)

print(response.text)
