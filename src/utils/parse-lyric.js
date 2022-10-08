/* 
[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:02.000] 编曲 : 许嵩
[00:03.000] 制作人 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去
[00:43.340]请你少买冰淇淋
[00:45.680]天凉就别穿短裙 
*/

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
  const lineStrings = lyricString.split('\n')
  // console.log(lineStrings);

  const lyrics = []
  for (let line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line)
      // if (result) continue
      const time1 = result[1] * 60 * 1000
      const time2 = result[2] * 1000
      const time3 = result[3].length === 3 ? result[3]*1 : result[3] * 10
      const time = time1 + time2 + time3
      const content = line.replace(parseExp, '').trim()
      const lineObj = {time, content}
      lyrics.push(lineObj)
    }
  }
  return lyrics
}