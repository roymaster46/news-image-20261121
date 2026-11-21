# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/roymaster46/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/roymaster46/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image that sums up the world's news of **Saturday, 21 November 2026** — a dense newspaper front page with **39 stories from 7 regions**:

- **3 hero stories** with illustrated panels: Russian missiles land in Poland and NATO scrambles jets (Rutte flies to Warsaw today); Wall Street sinks into correction as the AI sell-off deepens (S&P 500 -3.7%, Nasdaq -5.28%, Nvidia about -14%); GTA VI posts $3.79bn in day-one sales, the biggest entertainment launch ever (32.5 million copies pre-sold, 99 on Metacritic).
- **9 more stories** with scene illustrations: the Myanmar genocide verdict's fallout, COP31 slipping into overtime with no deal, the UK and EU signing three deals, four nations demanding Gaza aid access as floods worsen, the Kryvyi Rih strike (2 dead, 42 hurt), Bolsonaro rushed to hospital, Saudi interceptors over Riyadh, the Iran war nearing its ninth month, and France's fourth weekend of cost-of-living protests.
- **27 one-line briefs** plus a **dark world map** with numbered red pins for stories 1–12, a region-count strip, a day-in-numbers strip, a **THE DAY IN UTC timeline strip**, **HOW SURE ARE WE?** and **MARKETS & MONEY** boxes, and a **DATE CHECK box** naming the near-miss stories left out because they happened earlier.

## Layout

The page follows the pattern that scored best in this series (news19 v3, rank 124): light paper masthead, region strip, numbers strip, UTC timeline, heroes, illustrated mids, map + briefs, editorial boxes, date check. Deliberately NOT repeated from the news20 v3 regression: GTA VI stays in, figures keep their symbols (1.5°C style, commas, %), and type stays at broadsheet sizes.

The image (`entry.png`, 1024×1024, 239,375 bytes, sha256 `d47f3d1e4be2b68b66a8eb5beceec7ebbbe2f010da6bff0a40f08ee21b098226`, drawn programmatically with PIL from verified wire reports — see `../news-image-20261121-dev/render.py`) is copied to `/output/entry.png` by `main.ts`, which also verifies the PNG's dimensions and 1 MiB size cap before copying. Two consecutive renders produce identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=26tnw136&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
