# 文件管理

##### 函数
- CancelIo 取消正在进行的IO
- CancelIoEx 取消正在进行的IO
- CancelSynchronousIo 取消正在进行的同步IO
- CreateFile 创建文件
- CreateFileTransacted 创建文件事务
- CreateIoCompletionPort 创建IO完成端口
- DeleteFile 删除文件
- FlushFileBuffers 刷新文件输出缓冲
- GetQueuedCompletionStatusEx 获取异步IO结果
- OpenFile 打开文件
- GetCompressedFileSize 获取文件物理大小
- GetFileSize 获取文件逻辑大小
- GetFileSizeEx 获取文件逻辑大小
- GetFileType 获取文件类型
- GetFullPathName 获得完整路径
- ReadFile 读取文件
- ReadFileEx 读取文件
- SetFileCompletionNotificationModes 设置当文件IO完成时的操作
- SetFileInformationByHandle 设置文件信息
- SetEndOfFile 将当前文件指针的位置设为文件末端
- SetFilePointer 设置文件指针
- SetFilePointerEx 设置文件指针
- WriteFile 写入文件
- WriteFileEx 写入文件

##### 回调函数

- LPOVERLAPPED_COMPLETION_ROUTINE 异步IO完成时调用
宏常量
- MAX_PATH 文件路径最大长度
