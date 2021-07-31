# HTMLMediaElement

多媒体元素接口。

## 继承

Object / [Node](Node.md) / [Element](Element.md) / [HTMLElement](HTMLElement.md) / HTMLMediaElement

## 派生

- [HTMLAudioElement](HTMLAudioElement.md)
- [HTMLVideoElement](HTMLVideoElement.md)

## 原型属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| audioTracks | number | 可用音频轨道的数量 | - | true | - |
| buffered | TimeRanges | 已缓冲区域 | - | true | - |
| controlsList | DOMTokenList | 显示的控件 | - | true | - |
| currentSrc | string | 源的绝对URL | - | true | - |
| currentTime | number | 当前播放时间（秒） | true | true | - |
| defaultPlaybackRate | number | 默认播放速率 | true | true | - |
| duration | number | 多媒体长度（秒） | - | true | - |
| ended | boolean | 是否已播放结束 | - | true | - |
| error | MediaError | 最近发生的异常 | - | true | - |
| muted | boolean | 是否被静音 | true | true | - |
| networkState | number | 网络状态 | - | true | - |
| paused | boolean | 是否处于暂停状态 | - | true | - |
| playbackRate | number | 播放速率 | true | true | - |
| readyState | string | 就绪状态 | - | true | - |
| seekable | TimeRanges | 用户可跳转的范围 | - | true | - |
| textTracks | TextTrackList | 文本轨 | - | true | - |
| videoTracks | VideoTrackList | 视频轨 | - | true | - |
| volume | number | 音量 | true | true | - |

##### HTML属性

| 名称 | 类型 | 描述 |  writable | enumerable | configurable |
|---|---|---|---|---|---|
| autoplay | boolean | autoplay | true | true | - |
| controls | boolean | controls | true | true | - |
| crossOrigin | string | crossorigin | true | true | - |
| defaultMuted | boolean | muted | true | true | - |
| loop | boolean | loop | true | true | - |
| src | string | src | true | true | - |