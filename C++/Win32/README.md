# Win32

## 入口函数
##### WinMain    
``` C
int APIENTRY WinMain(
    HINSTANCE hInstance, 
    HINSTANCE hPrevInstance, 
    LPSTR lpCmdLine, 
    int nCmdShow
)    
```

ASCII版本GUI应用程序。

##### wWinMain    
``` C
int APIENTRY wWinMain(
    HINSTANCE hInstance, 
    HINSTANCE hPrevInstance, 
    PWSTR pCmdLine, 
    int nCmdShow
)    
```

UNICODE版本GUI应用程序。

##### _tWinMain    
``` C
int APIENTRY _tWinMain(
    HINSTANCE hInstance, 
    HINSTANCE hPrevInstance, 
    PTSTR pCmdLine, 
    int nCmdShow
)    
```

字符串兼容版本GUI应用程序。

##### main    
``` C
int main(
    int argc, 
    char* argv[], 
    char* envp[]
)
```

ASCII版本CUI应用程序。

##### wmain    
``` C
int wmain(
    int argc, 
    wchar_t* argv[], 
    wchar_t* envp[]
)
```

UNICODE版本CUI应用程序。

##### _tmain    
``` C
int _tmain(
    int argc, 
    TCHAR* argv[], 
    TCHAR* envp[]
)    
```

字符串兼容版本CUI应用程序。

##### DllMain    
``` C
BOOL WINAPI DllMain(
    HINSTANCE hinstDLL, 
    DWORD fdwReason, 
    LPVOID lpvReserved
)    
```

DLL入口。