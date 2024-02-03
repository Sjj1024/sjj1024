#!/usr/bin/env python

import asyncio
import websockets


async def echo(websocket):
    while True:
        name = await websocket.recv()
        print(f"接收到消息：{name}")
        replay = f"Hello {name}"
        await websocket.send(replay)
        print(f"发送消息结束")


async def main():
    async with websockets.serve(echo, "localhost", 8765):
        print("服务端启动成功：ws://localhost:8765")
        await asyncio.Future()  # run forever


asyncio.run(main())