# Name the Robot Band

[![make.fun](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)](https://make.fun/c/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/Riel666/u-motasimfuad-name-the-robot-band-1ffc6a74/rank.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-name-the-robot-band-1ffc6a74)
[![reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/Riel666/u-motasimfuad-name-the-robot-band-1ffc6a74/reward.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-name-the-robot-band-1ffc6a74)

Entry for the make.fun competition
[Name the Robot Band](https://make.fun/c/u-motasimfuad-name-the-robot-band-1ffc6a74)
($3 pool).

## What it does

`main.ts` writes a single line — the funny name of a robot band, plus a few words on its hit song — to `/output/entry.txt`. The program is fully deterministic: no
randomness, no network, no input. It always writes exactly the same line.

> The Circuit Breakers — their hit 'We Will Reboot You' has been stuck at number one for six weeks, mostly because nobody can find the off switch.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## License

MIT — see [LICENSE](LICENSE).
