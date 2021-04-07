# mount
设备挂载。

## 语法
`mount [-t <vfstype>] [-o <options>] <设备> <挂载点>`

`-t <vfstype>` 指定文件系统类型（iso9660、msdos、vfat、ntfs、smbfs、nfs、ext3、ext4）

<options>包括： 
- `loop` 把一个文件当成硬盘分区挂接上系统 
- `ro` 采用只读方式挂接设备 
- `rw` 采用读写方式挂接设备 
- `iocharset=<charset>` 指定访问文件系统所用字符集 
- `mand` 允许采用强制锁

若只指定设备或挂载点，自动参照/etc/fstab。

---

`mount -a`

将文件/etc/fstab中没使用noauto选项的所有文件系统按照指定的方式自动挂载，该命令一般在启动脚本中执行。

## 示例
`mount -t vfat -o iocharset=cp936 /dev/sdb /mnt/usb`  
挂载U盘到/mnt/usb目录中，采用FAT文件系统。
