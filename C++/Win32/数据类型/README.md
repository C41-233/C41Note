# 数据类型

## 整型
<table>
	<thead>
		<tr><th>type</th><th>pointer</th><th>far pointer</th><th>const far pointer</th><th>位数</th><th>符号</th></tr>
	</thead>
	<tbody>
		<tr><th>BOOL</th><th>PBOOL</th><th>LPBOOL</th><th></th><td></td><td></td></tr>
		<tr><th>BYTE</th><th>PBYTE</th><th>LPBYTE</th><th></th><td>8</td><td>unsigned</td></tr>
		<tr><th>ATOM</th><th></th><th></th><th></th><td>16</td><td>unsigned</td></tr>
		<tr><th>SHORT</th><th>PSHORT</th><th></th><th></th><td>16</td><td>signed</td></tr>
		<tr><th>USHORT</th><th>PUSHORT</th><th></th><th></th><td>16</td><td>unsigned</td></tr>
		<tr><th>WORD</th><th>PWORD</th><th>LPWORD</th><th></th><td>16</td><td>unsigned</td></tr>
		<tr><th>WPARAM</th><th></th><th></th><th></th><td>16</td><td>unsigned</td></tr>
		<tr><th>INT</th><th></th><th>LPINT</th><th></th><td>32</td><td>signed</td></tr>
		<tr><th>UINT</th><th>PUINT</th><th></th><th></th><td>32</td><td>unsigned</td></tr>
		<tr><th>LONG</th><th>PLONG</th><th>LPLONG</th><th></th><td>32</td><td>signed</td></tr>
		<tr><th>ULONG</th><th>PULONG</th><th></th><th></th><td>32</td><td>unsigned</td></tr>
		<tr><th>DWORD</th><th>PDWORD</th><th>LPDWORD</th><th></th><td>32</td><td>unsigned</td></tr>
		<tr><th>LRESULT</th><th></th><th></th><th></th><td>32</td><td>unsigned</td></tr>
		<tr><th>LPARAM</th><th></th><th></th><th></th><td>32</td><td>unsigned</td></tr>
		<tr><th>LONGLONG</th><th>PLONGLONG</th><th></th><th></th><td>64</td><td>signed</td></tr>
		<tr><th>DWORDLONG</th><th>PDWORDLONG</th><th></th><th></th><td>64</td><td>unsigned</td></tr>
		<tr><th>SIZE_T</th><th>PSIZE_T</th><th></th><th></th><td></td><td>unsigned</td></tr>
		<tr><th>SSIZE_T</th><th>PSSIZE_T</th><th></th><th></th><td></td><td>signed</td></tr>
		<tr><th>VOID</th><th>PVOID</th><th>LPVOID</th><th>LPCVOID</th><td></td><td></td></tr>
	</tbody>
</table>

## 浮点型

<table>
	<thead>
		<tr><th>type</th><th>C type</th><th>位数</th><th>类型</th></tr>
	</thead>
	<tbody>
		<tr><th>FLOAT</th><th>float</th><th>32</th><td>单精度浮点数</td></tr>
	</tbody>
</table>

## 句柄
- HANDLE(LPHANDLE) 句柄
    - HACCEL 快捷键表
    - HGDIOBJ GDI对象
        - HBITMAP 位图
        - HBRUSH 画刷
        - HCURSOR 光标
        - HDC 设备上下文
        - HFONT 字体
        - HICON 图标
        - HPEN 画笔
        - HRGN 裁剪区域
    - HGLOBAL 全局内存
    - HINSTANCE 应用程序实例
    - HINTERNET 网络
    - HLOCAL 局部内存
    - HMENU 菜单
    - HMODULE 模块
    - HRESULT 接口返回值
    - HWND 窗口

## 字符串
<table>
	<thead>
		<tr><th>char</th><th>char*</th><th>const char*</th><th>near char*</th><th>far char*</th><th>const far char*</th><th>描述</th></tr>
	</thead>
	<tbody>
		<tr><th>TCHAR</th><th>PTCH<br/>PTCHAR<br/>PTSTR</th><th></th><th></th><th>LP<br/>LPTCH<br/>LPTSTR</th><th>LPCTSTR</th><td>在UNICODE环境下表示WCHAR<br/>在ANSI环境下表示CHAR</td></tr>
		<tr><th>CHAR</th><th>PCH<br/>PCHAR<br/>PSTR</th><th>PCSTR</th><th>NPSTR</th><th>LPCH<br/>LPSTR</th><th>LPCCH<br/>LPCSTR</th><td>ANSI字符</td></tr>
		<tr><th>WCHAR</th><th>PWCH<br/>PWCHAR<br/>PWSTR</th><th>PCWCH<br/>PCWSTR</th><th>NWPSTR</th><th>LPWCH<br/>LPWSTR</th><th>LPCWCH<br/>LPCWSTR</th><td>UNICODE字符</td></tr>
	</tbody>
</table>
