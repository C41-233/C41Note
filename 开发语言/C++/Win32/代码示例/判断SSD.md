# 判断指定文件是否在SSD上

``` C++
#include <Windows.h>

static HANDLE GetVolumeHandleForFile(const wchar_t* filePath) {
    wchar_t volume_path[MAX_PATH];
    if (!GetVolumePathName(filePath, volume_path, ARRAYSIZE(volume_path)))
        return nullptr;

    wchar_t volume_name[MAX_PATH];
    if (!GetVolumeNameForVolumeMountPoint(volume_path, volume_name,
                                          ARRAYSIZE(volume_name)))
        return nullptr;

    auto length = wcslen(volume_name);
    if (length && volume_name[length - 1] == L'\\') volume_name[length - 1] = L'\0';

    return CreateFile(volume_name, 0,
                      FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE,
                      nullptr, OPEN_EXISTING, FILE_FLAG_BACKUP_SEMANTICS, nullptr);
}

static bool IsFileOnSsd(const wchar_t* file_path, bool* is_ssd) {
    HANDLE volume = GetVolumeHandleForFile(file_path);
    if (volume == INVALID_HANDLE_VALUE) {
        return false; 
    }

    STORAGE_PROPERTY_QUERY query{};
    query.PropertyId = StorageDeviceSeekPenaltyProperty;
    query.QueryType = PropertyStandardQuery;
    DWORD count;
    DEVICE_SEEK_PENALTY_DESCRIPTOR result{};
    if (DeviceIoControl(volume, IOCTL_STORAGE_QUERY_PROPERTY, &query, sizeof(query), &result, sizeof(result), &count, nullptr)) {
        *is_ssd = !result.IncursSeekPenalty;
        CloseHandle(volume);
        return true;
    } 
    else 
    { 
        CloseHandle(volume);
        return false;
    }
}

static std::wstring string_to_wstring(const std::string& str) {
    auto size = static_cast<int>(str.size());
    auto len = MultiByteToWideChar(CP_ACP, 0, str.c_str(), size, NULL, 0);
    wchar_t* buffer = new wchar_t[len + 1];
    MultiByteToWideChar(CP_ACP, 0, str.c_str(), size, buffer, len);
    buffer[len] = '\0';
    std::wstring result;
    result.append(buffer);
    delete[] buffer;
    return result;
}

bool IsFileOnSsd(const char* path, bool* result) { 
    auto wstring = string_to_wstring(path);
    return IsFileOnSsd(wstring.c_str(), result);
}
```
