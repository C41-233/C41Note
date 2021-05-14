# 回调

##### 函数

- CallbackMayRunLong 通知线程池回调函数运行时间较长
- DisassociateCurrentThreadFromCallback 通知线程池回调函数逻辑上已经完成
- FreeLibraryWhenCallbackReturns 当回调函数返回时自动调用FreeLibrary
- LeaveCriticalSectionWhenCallbackReturns 当回调函数返回时自动调用LeaveCriticalSection
- ReleaseMutexWhenCallbackReturns 当回调函数返回时自动调用ReleaseMutex
- ReleaseSemaphoreWhenCallbackReturns 当回调函数返回时自动调用ReleaseSemaphore
- SetEventWhenCallbackReturns 当回调函数返回时自动调用SetEvent
- TrySubmitThreadpoolCallback 向线程池提交请求

##### 回调函数

- PTP_SIMPLE_CALLBACK 线程池回调函数
