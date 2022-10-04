import aiohttp
import asyncio
from time import time


async def fetch(session: aiohttp.ClientSession, url: str, endpoint: str, id: str):
    async with session.get(url.format(endpoint, id)) as response:
        return await response.json()
    
async def get_all(urls):
    async with aiohttp.ClientSession() as session:
        results = await asyncio.gather(*[asyncio.create_task(fetch(session, url, 'user', 'eric')) for url in urls])
        return results

url = 'http://127.0.0.1:5000/{}/{}'
urls = [url.format(endpoint, id) for endpoint, id in zip(['user', 'post'], ['eric', '1'])]

start = time()
results = asyncio.run(get_all(urls))
print(results)
print(f'Asyncio took {time() - start} seconds')