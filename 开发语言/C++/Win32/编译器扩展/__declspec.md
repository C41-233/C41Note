# __declspec
`__declspec`用于指定所给定类型的实例的与Microsoft相关的存储方式。其它的有关存储方式的修饰符如static与extern等是C和C++语言的ANSI规范，而`__declspec`是一种扩展属性的定义。扩展属性语法简化并标准化了C和C++语言关于Microsoft的扩展。

### 语法
`__declspec(属性参数列表)`

__declspec关键字应该出现在简单声明的前面。对于出现在`*`或`&`后面或者变量声明中标识符的前面的__declspec，编译器将忽略并且不给出警告。要注意区分__declspec是修饰类型还是修饰变量。

多个属性参数间用空格分开。

## 属性

##### align
```
__declspec(align(n))
```

其中，n是对齐参数，其有效值是2的整数次幂（单位为字节）。

使用__declspec(align(n))来精确控制用户自定义数据的对齐方式。你可以在定义struct，union，class或声明变量时使用。

不能为函数参数使用__declspec(align(n))。

如果未使用__declspec(align(n))，编译器将根据数据大小按自然边界对齐。如字节整数按字节边界对齐；字节double按字节边界对齐。类或结构体中的数据，将取数据本身的自然对齐方式和#pragma pack(n)设置的对齐系数中的最小值进行对齐。

__declspec(align(n))和#pragma pack(n)配对使用，前者规定了对齐系数的最小值，后者规定了对齐系数的最大值。当两者同时出现时，前者拥有更高的优先级。即，当两者同时出现且值矛盾时，后者将不起作用。

当变量size大于等于#pragma pack(n)指定的n，而且__declspec(align(n))指定的数值n比对应类型长度小的时候，这个__declspec(align(n))指定将不起作用。

当#pragma pack(n)指定的值n大于等于所有数据成员size的时候，这个值n将不起作用。

##### allocate
```
__declspec(allocate("segname"))
```

为数据指定存储的数据段。数据段名必须为以下列举中的一个：code_seg、const_seg、data_seg、init_seg、section。

##### appdomain
指定托管程序中的每个应用程序域都要有一份指定全局变量或静态成员变量的拷贝。

##### deprecated
```
__declspec(deprecated)
__declspec(deprecated("text"))
```

与#pragma deprecated()的作用相同。用于指定函数的某个重载形式是不推荐的。当在程序中调用了被deprecated修饰的函数时，编译器将给出C4996警告，并且可以指定具体的警告信息。该警告信息可以来源于定义的宏。

##### dllimport、dllexport
分别用来从dll导入函数，数据，或对象以及从dll中导出函数，数据，或对象。相当于定义了dll的接口，为它的客户exe或dll定义可使用的函数，数据，或对象。
将函数声明成dllexport就可以免去定义模块定义(.DEF)文件。

被声明为dllexport的C++函数导出时的函数名将会按照C++规则经过处理。如果要求不按照C++规则进行名字处理，请使用.def文件或使用extern "C"。

##### jitintrinsic
用于标记一个函数或元素是位通用语言运行时(CLR)。主要用于Microsoft提供的某些库中。
使用jitintrinsic会在函数签名中加入MODOPT(IsJitIntrinsic)。

##### naked
此关键字仅用于x86系统，多用于虚拟设备驱动。此关键字可以使编译器在生成代码时不包含任何注释或标记。
仅可以对函数的定义使用，不能用于数据声明、定义，或者函数的声明。

##### noalias
仅适用于函数，它指出该函数是半纯粹的函数。半纯粹的函数是指仅引用或修改局部变量、参数和第一层间接参数。它是对编译器的一个承诺，如果该函数引用全局变量或第二层间接指针参数，则编译器会生成中断应用程序的代码。

##### noinline
因为在类定义中定义的成员函数默认都是inline的，__declspec(noinline)用于显式指定类中的某个函数不需要inline(内联)。
如果一个函数很小而且对系统性能影响不大，有必要将其声明为非内敛的。例如，用于处理错误情况的函数。

##### noreturn
一个函数被__declspec(noreturn)所修饰，那么它的含义是告诉编译器，这个函数不会返回，其结果是让编译器知道被修饰为__declspec(noreturn)的函数之后的代码不可到达。如果编译器发现一个函数有无返回值的代码分支，编译器将会报C4715警告，或者C2202错误信息。如果这个代码分支是因为函数不会返回从而无法到达的话，可以使用约定__declspec(noreturn)来避免上述警告或者错误。
将一个期望返回的函数约定为__declspec(noreturn)将导致未定义的行为。

##### nothrow
可用于函数声明。告诉编译器被声明的函数以及函数内部调用的其它函数都不会抛出异常。

##### novtable
可用于任何类声明中，但最好只用于纯接口类，即类本身从不实例化。此关键字的声明将阻止编译器对构造和析构函数的vfptr的初始化。可优化编译后代码大小。如果试图实例化一个用__declspec(novtable)声明的类然后访问类中成员，则会在运行时产生访问错误(access violation)。

##### process
表示你的托管应用程序进程应该拥有一份指定全局变量，静态成员变量，或所有应用程序域共享的静态本地变量的拷贝。在使用 /clr:pure进行编译时，应该使用 __declspec(process)，因为使用/clr:pure进行编译时，在默认情况下，每个应用程序域拥有一份全局和静态变量的拷贝。在使用/clr进行编译时，不必使用__declspec(process)，因为使用/clr进行编译时，在默认情况下，每个进程有一份全局和静态变量的拷贝。
只有全局变量，静态成员变量，或本地类型的本地静态变量可以用__declspec(process)修饰。

在使用/clr:pure进行编译时，被声明为__declspec(process)的变量同时也应该声明为 const类型。如果想每个应用程序域拥有一份全局变量的拷贝时，请使用appdomain。

##### property
```
__declspec(property(get=get_func_name)) 
__declspec(property(put=put_func_name)) 
__declspec(property(get=get_func_name, put=put_func_name))
```
该属性可用于类或结构定义中的非静态“虚数据成员”。实际上就是做了一个映射，把你的方法映射成属性，以供访问。get 和put就是属性访问的权限，一个是读的权限，一个是写的权限。当编译器看到被property修饰的数据成员出现在成员选择符("." 或"->")的右边的时候，它将把该操作转换成get或put方法。该修饰符也可用于类或结构定义中的空数组。

##### restrict
仅适用于返回指针的函数声明或定义，如，CRT的malloc函数：__declspec(restrict) void* malloc(size_t size)
它告诉编译器该函数返回的指针不会与任何其它的指针混淆。它为编译器提供执行编译器优化的更多信息。对于编译器来说，最大的困难之一是确定哪些指针会与其它指针混淆，而使用这些信息对编译器很有帮助。有必要指出，这是对编译器的一个承诺，编译器并不对其进行验证。如果您的程序不恰当地使用 __declspec(restrict)，则该程序的行为会不正确。

##### selectany
在MFC，ATL的源代码中充斥着__declspec(selectany)的声明。selectany可以让我们在.h文件中初始化一个全局变量而不是只能放在.cpp中。比如有一个类，其中有一个静态变量，那么我们可以在.h中通过类似 __declspec(selectany) type class::variable = value;这样的代码来初始化这个全局变量。既是该.h被多次include，链接器也会为我们剔除多重定义的错误。对于template的编程会有很多便利。

##### thread
声明局部变量具有线程存储时限，以便链接器安排在创建线程时自动分配的存储。
线程局部存储(TLS)是一种机制，在多线程运行环境中，每个线程分配自己的局部数据。在标准多线程程序中，数据是在多个线程间共享的，而TLS是一种为每个线程分配自己局部数据的机制。

该属性只能用于数据或不含成员函数的类的声明和定义，不能用于函数的声明和定义。 该属性的使用可能会影响DLL的延迟载入。

该属性只能用于静态数据，包括全局数据对象(static和extern)，局部静态对象，类的静态数据成员；不能用于自动数据对象。

该属性必须同时用于数据的声明和定义，不管它的声明和定义是在一个文件还是多个文件。 __declspec(thread)不能用作类型修饰符。如果在类声明的同时没有定义对象，则__declspec(thread)将被忽略。

##### uuid
```
__declspec(uuid("ID"))
```

为类型分配GUID，可使用`__uuidof`获取。