# ELF

ELF是可执行与可链接格式（Executable and Linkable Format），是一种用于可执行文件、目标文件、共享库和核心转储（core dump）的标准文件格式。

## 格式

ELF格式依次包含一个ELF header和数据。数据可以依次包含：
1. program header table，包含0个或多个段。
2. section header table，包含0个或多个段。
3. program header table和section header table项引用的数据。

## ELF header

```
typedef struct{
	unsigned char e_iend[EI_NIDENT];
	Elf32_Half	e_type;
	Elf32_Half	e_machine;
	Elf32_Word	e_version;
	Elf32_Addr	e_entry;
	Elf32_Off	e_phoff;
	Elf32_Off	e_shoff;
	Elf32_Word	e_flags;
	Elf32_Half	e_ehsize;
	Elf32_Half	e_phentsize;
	Elf32_Half	e_phnum;
	Elf32_Half	e_shentsize;
	Elf32_Half	e_shnum;
	Elf32_Half	e_shstrndx;
} Elf32_Endr;

typedef struct elf64_hdr {
    unsigned char e_ident[EI_NIDENT];
    Elf64_Half    e_type;
    Elf64_Half    e_machine;
    Elf64_Word    e_version;
    Elf64_Addr    e_entry;	
    Elf64_Off     e_phoff;		
    Elf64_Off     e_shoff;		
    Elf64_Word    e_flags;
    Elf64_Half    e_ehsize;
    Elf64_Half    e_phentsize;
    Elf64_Half    e_phnum;
    Elf64_Half    e_shentsize;
    Elf64_Half    e_shnum;
    Elf64_Half    e_shstrndx;
} Elf64_Ehdr;
```

<table>
	<tr>
		<th>字段</th>
		<th>字节（32/64）</th>
		<th>描述</th>
	</tr>
	<tr>
	    <th>e_ident</th>
	    <td>16</td>
	    <td>
	        <p>[EI_MAG0]：0x7F</p>
	        <p>[EI_MAG1]、[EI_MAG2]、[EI_MAG3]：“ELF”三个字符（45 4C 46）</p>
	        <p>[EI_CLASS]：1表示32位格式，2表示64位格式</p>
			<p>[EI_DATA]：标识从e_type开始的结构的字节序。1表示小端序，2表示大端序</p>
			<p>[EI_VERSION]：版本号，设为1</p>
			<p>[EI_OSABI]：标识目标操作系统的ABI类型
                <br/>0x00：System V
                <br/>0x01：HP-UX
                <br/>0x02：NetBSD
                <br/>0x03：Linux
                <br/>0x04：GNU Hurd
                <br/>0x06：Solaris
                <br/>0x07：AIX
                <br/>0x08：IRIX
                <br/>0x09：FreeBSD
                <br/>0x0A：Tru64
                <br/>0x0B：Novell Modesto
                <br/>0x0C：OpenBSD
                <br/>0x0D：OpenVMS
                <br/>0x0E：NonStop Kernel
                <br/>0x0F：AROS
                <br/>0x10：Fenix OS
                <br/>0x11：CloudABI
                <br/>0x12：Stratus Technologies OpenVOS
			</p>
			<p>[EI_ABIVERSION]：为ABI版本号预留，目前还未使用，设为0。glibc 2.12+在e_ident[EI_OSABI]=3的情况下，将该字段用于设置feature level</p>
			<p>[EI_PAD]（7字节）：目前未使用，设为0</p>
        </td>
	</tr>
</table>