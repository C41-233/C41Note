# ELF

ELF是可执行与可链接格式（Executable and Linkable Format），是一种用于可执行文件、目标文件、共享库和核心转储（core dump）的标准文件格式。

## 格式

ELF格式依次包含一个ELF头（ELF header）和数据。数据可以依次包含：
1. 程序头表（program header table），包含0个或多个项。
2. 节头表（section header table），包含0个或多个项。
3. 程序头表和节头表项引用的数据。

## ELF头（ELF header）

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
	<tr>
	    <th>e_type</th>
	    <td>2</td>
	    <td><p>标识文件类型</p>
	        <table>
	            <tr>
	                <td>ET_NONE</td>
	                <td>0x0000</td>
	                <td>无</td>
	            </tr>
	            <tr>
	                <td>ET_REL</td>
	                <td>0x0001</td>
	                <td>可重定位文件</td>
	            </tr>
	            <tr>
	                <td>ET_EXEC</td>
	                <td>0x0002</td>
	                <td>可执行文件</td>
	            </tr>
	            <tr>
	                <td>ET_DYN</td>
	                <td>0x0003</td>
	                <td>共享目标文件</td>
	            </tr>
	            <tr>
	                <td>ET_CORE</td>
	                <td>0x0004</td>
	                <td>内核文件</td>
	            </tr>
	            <tr>
	                <td>ET_LOOS</td>
	                <td>0xFE00</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>ET_HIOS</td>
	                <td>0xFEFF</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>ET_LOPROC</td>
	                <td>0xFF00</td>
	                <td>由处理器定义</td>
	            </tr>
	            <tr>
	                <td>ET_HIPROC</td>
	                <td>0xFFFF</td>
	                <td>由处理器定义</td>
	            </tr>
	        </table>
	    </td>
	</tr>
	<tr>
	    <th>e_machine</th>
		<td>2</td>
		<td><p>运行该文件需要的指令集架构</p>
			<table>
				<tr>
					<td>EM_NONE</td>
					<td>0x0000</td>
					<td>无</td>
				</tr>
				<tr>
					<td>EM_M32</td>
					<td>0x0001</td>
					<td>AT&T WE 32100</td>
				</tr>
				<tr>
					<td>EM_SPARC</td>
					<td>0x0002</td>
					<td>SPARC</td>
				</tr>
				<tr>
					<td>EM_386</td>
					<td>0x0003</td>
					<td>x86</td>
				</tr>
				<tr>
					<td>EM_68K</td>
					<td>0x0004</td>
					<td>Motorola 68000 (M68k)</td>
				</tr>
				<tr>
					<td>EM_88K</td>
					<td>0x0005</td>
					<td>Motorola 88000 (M88k)</td>
				</tr>
				<tr>
					<td>EM_860</td>
					<td>0x0007</td>
					<td>Intel 80860</td>
				</tr>
				<tr>
					<td>EM_MIPS</td>
					<td>0x0008</td>
					<td>MIPS RS3000</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0009</td>
					<td>IBM_System/370</td>
				</tr>
				<tr>
					<td></td>
					<td>0x000A</td>
					<td>MIPS RS3000 Little-endian</td>
				</tr>
				<tr>
					<td></td>
					<td>0x000E</td>
					<td>Hewlett-Packard PA-RISC</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0013</td>
					<td>Intel 80960</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0014</td>
					<td>PowerPC</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0015</td>
					<td>PowerPC (64-bit)</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0016</td>
					<td>S390, including S390x</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0028</td>
					<td>ARM (up to ARMv7/Aarch32)</td>
				</tr>
				<tr>
					<td></td>
					<td>0x002A</td>
					<td>SuperH</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0032</td>
					<td>IA-64</td>
				</tr>
				<tr>
					<td></td>
					<td>0x003E</td>
					<td>amd64</td>
				</tr>
				<tr>
					<td></td>
					<td>0x008C</td>
					<td>TMS320C6000 Family</td>
				</tr>
				<tr>
					<td></td>
					<td>0x00B7</td>
					<td>ARM 64-bits (ARMv8/Aarch64)</td>
				</tr>
				<tr>
					<td></td>
					<td>0x00F3</td>
					<td>RISC-V</td>
				</tr>
				<tr>
					<td></td>
					<td>0x00F7</td>
					<td>Berkeley Packet Filter</td>
				</tr>
				<tr>
					<td></td>
					<td>0x0101</td>
					<td>WDC 65C816</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<th>e_version</th>
		<td>4</td>
		<td>文件版本号，设为1</td>
	</tr>
	<tr>
		<th>e_entry</th>
		<td>4/8</td>
		<td>程序入口地址，没有则为0</td>
	</tr>
	<tr>
		<th>e_phoff</th>
		<td>4/8</td>
		<td>程序头表在文件中的偏移量（字节）<br/>通常程序头表紧跟在ELF头之后，则32位下该值为0x34，64位下该值为0x40</td>
	</tr>
	<tr>
		<th>e_shoff</th>
		<td>4/8</td>
		<td>节头表在文件中的偏移量（字节）</td>
	</tr>
	<tr>
		<th>e_flags</th>
		<td>4</td>
		<td>标志位，与特定处理器相关</td>
	</tr>
	<tr>
		<th>e_ehsize</th>
		<td>2</td>
		<td>ELF头的大小（字节）<br/>32位下该值为0x0034，64位下该值为0x0040</td>
	</tr>
	<tr>
		<th>e_phentsize</th>
		<td>2</td>
		<td>ELF程序头表每一项的大小（字节）<br/>32位下该值为0x0020</td>
	</tr>
	<tr>
		<th>e_phnum</th>
		<td>2</td>
		<td>ELF程序头表的项数</td>
	</tr>
	<tr>
		<th>e_shentsize</th>
		<td>2</td>
		<td>ELF节头表每一项的大小（字节）</td>
	</tr>
	<tr>
		<th>e_shnum</th>
		<td>2</td>
		<td>ELF节头表的项数</td>
	</tr>
	<tr>
		<th>e_shstrndx</th>
		<td>2</td>
		<td>包含节名称的字符串表的节头表项索引</td>
	</tr>
</table>

## 程序头表（program header table）

程序头表包含0个或多个程序头表项，程序头表项的数量由ELF头中的e_phnum定义，没一项的大小为e_phentsize。


<table>
	<tr>
		<th>字段</th>
		<th>字节（32/64）</th>
		<th>描述</th>
	</tr>
	<tr>
		<td>p_type</td>
		<td>4</td>
		<td><p>程序头表项的类型</p>
			<table>
				<tr>
					<td>PT_NULL</td>
					<td>0x00000000</td>
					<td>未使用</td>
				</tr>
				<tr>
					<td>PT_LOAD</td>
					<td>0x00000001</td>
					<td>Loadable segment</td>
				</tr>
				<tr>
					<td>PT_DYNAMIC</td>
					<td>0x00000002</td>
					<td>动态链接信息</td>
				</tr>
				<tr>
					<td>PT_INTERP</td>
					<td>0x00000003</td>
					<td>编译器信息</td>
				</tr>
				<tr>
					<td>PT_SHLIB</td>
					<td>0x00000005</td>
					<td>保留</td>
				</tr>
				<tr>
					<td>PT_PHDR</td>
					<td>0x00000006</td>
					<td>程序头表自身</td>
				</tr>
				<tr>
					<td>PT_TLS</td>
					<td>0x00000007</td>
					<td>Thread-Local Storage template</td>
				</tr>
				<tr>
					<td>PT_LOOS</td>
					<td>0x60000000</td>
					<td rowspan="2">该范围由操作系统定义</td>
				</tr>
				<tr>
					<td>PT_HIOS</td>
					<td>0x6FFFFFFF</td>
				</tr>
				<tr>
					<td>PT_LOPROC</td>
					<td>0x70000000</td>
					<td rowspan="2">该范围由操作系统定义</td>
				</tr>
				<tr>
					<td>PT_HIPROC</td>
					<td>0x7FFFFFFF</td>
				</tr>
			</table>
		</td>
	</tr>
</table>