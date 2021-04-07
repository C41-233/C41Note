# eject
控制外设。

## 语法
`eject [options] [<设备>]`

<设备> 设备可以是驱动程序名称，也可以是挂入点。

## 参数
- `-a <开关>` 同`--auto`。
- `-c <光驱编号>` 同`--changerslut`。
- `-d` 同`--default`。
- `-f` 同`--floppy`。
- `-h` 同`--help`。
- `-n` 同`--noop`。
- `-q` 同`--tape`。
- `-r` 同`--cdrom`。
- `-s` 同`--scsi`。
- `-t` 同`--trayclose`。
- `-v` 同`--verbose`。

- `--auto <开关>` 控制设备的自动退出功能。
- `--changerslut <光驱编号>` 选择光驱柜中的光驱。
- `--default` 显示预设的设备，而不是实际执行动作。
- `--floppy` 退出抽取式磁盘。
- `--help` 显示帮助。
- `--noop` 显示指定的设备。
- `--tape` 退出磁带。
- `--cdrom` 退出光盘。
- `--scsi` 以SCSI指令来退出设备。
- `--trayclose` 关闭光盘的托盘。
- `--verbose` 执行时，显示详细的说明。

## 示例
`eject`  
弹出光驱

`eject -t` 
弹入光驱
