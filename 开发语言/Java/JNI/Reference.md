# JNI Reference

### 对象构造
<table>
	<tr><td>AllocObject</td><td>jobject AllocObject(JNIEnv* env, jclass clazz)</td></tr>
	<tr><td>NewObject</td><td>jobject NewObject(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>NewObjectV</td><td>jobject NewObjectV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>NewObjectA</td><td>jobject NewObjectA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
</table>

### 方法调用
<table>
	<tr><td>GetMethodID</td><td>jmethodID GetMethodID(JNIEnv* env, jclass clazz, const char* name, const char* sig)</td></tr>
	<tr><td>CallObjectMethod</td><td>jobject CallObjectMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallObjectMethodV</td><td>jobject CallObjectMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallObjectMethodA</td><td>jobject CallObjectMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallBooleanMethod</td><td>jboolean CallBooleanMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallBooleanMethodV</td><td>jboolean CallBooleanMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallBooleanMethodA</td><td>jboolean CallBooleanMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallByteMethod</td><td>jbyte CallByteMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallByteMethodV</td><td>jbyte CallByteMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallByteMethodA</td><td>jbyte CallByteMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallCharMethod</td><td>jchar CallCharMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallCharMethodV</td><td>jchar CallCharMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallCharMethodA</td><td>jchar CallCharMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallShortMethod</td><td>jshort CallShortMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallShortMethodV</td><td>jshort CallShortMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallShortMethodA</td><td>jshort CallShortMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallIntMethod</td><td>jint CallIntMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallIntMethodV</td><td>jint CallIntMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallIntMethodA</td><td>jint CallIntMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallLongMethod</td><td>jlong CallLongMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallLongMethodV</td><td>jlong CallLongMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallLongMethodA</td><td>jlong CallLongMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallFloatMethod</td><td>jfloat CallFloatMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallFloatMethodV</td><td>jfloat CallFloatMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallFloatMethodA</td><td>jfloat CallFloatMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallDoubleMethod</td><td>jdouble CallDoubleMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallDoubleMethodV</td><td>jdouble CallDoubleMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallDoubleMethodA</td><td>jdouble CallDoubleMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallVoidMethod</td><td>void CallVoidMethod(JNIEnv* env, jobject obj, jmethodID methodID, ...)</td></tr>
	<tr><td>CallVoidMethodV</td><td>void CallVoidMethodV(JNIEnv* env, jobject obj, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallVoidMethodA</td><td>void CallVoidMethodA(JNIEnv* env, jobject obj, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualObjectMethod</td><td>jobject CallNonvirtualObjectMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualObjectMethodV</td><td>jobject CallNonvirtualObjectMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualObjectMethodA</td><td>jobject CallNonvirtualObjectMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualBooleanMethod</td><td>jboolean CallNonvirtualBooleanMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualBooleanMethodV</td><td>jboolean CallNonvirtualBooleanMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualBooleanMethodA</td><td>jboolean CallNonvirtualBooleanMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualByteMethod</td><td>jbyte CallNonvirtualByteMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualByteMethodV</td><td>jbyte CallNonvirtualByteMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualByteMethodA</td><td>jbyte CallNonvirtualByteMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualCharMethod</td><td>jchar CallNonvirtualCharMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualCharMethodV</td><td>jchar CallNonvirtualCharMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualCharMethodA</td><td>jchar CallNonvirtualCharMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualByteMethodA</td><td>jbyte CallNonvirtualByteMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualShortMethod</td><td>jshort CallNonvirtualShortMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualShortMethodV</td><td>jshort CallNonvirtualShortMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualShortMethodA</td><td>jshort CallNonvirtualShortMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualIntMethod</td><td>jint CallNonvirtualIntMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualIntMethodV</td><td>jint CallNonvirtualIntMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualIntMethodA</td><td>jint CallNonvirtualIntMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualLongMethod</td><td>jlong CallNonvirtualLongMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualLongMethodV</td><td>jlong CallNonvirtualLongMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualLongMethodA</td><td>jlong CallNonvirtualLongMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualFloatMethod</td><td>jfloat CallNonvirtualFloatMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualFloatMethodV</td><td>jfloat CallNonvirtualFloatMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualFloatMethodA</td><td>jfloat CallNonvirtualFloatMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualDoubleMethod</td><td>jdouble CallNonvirtualDoubleMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualDoubleMethodV</td><td>jdouble CallNonvirtualDoubleMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualDoubleMethodA</td><td>jdouble CallNonvirtualDoubleMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallNonvirtualVoidMethod</td><td>void CallNonvirtualVoidMethod(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallNonvirtualVoidMethodV</td><td>void CallNonvirtualVoidMethodV(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallNonvirtualVoidMethodA</td><td>void CallNonvirtualVoidMethodA(JNIEnv* env, jobject obj, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>GetStaticMethodID</td><td>jmethodID GetStaticMethodID(JNIEnv* env, jclass clazz, const char* name, const char* sig)</td></tr>
	<tr><td>CallStaticObjectMethod</td><td>jobject CallStaticObjectMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticObjectMethodV</td><td>jobject CallStaticObjectMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticObjectMethodA</td><td>jobject CallStaticObjectMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticBooleanMethod</td><td>jboolean CallStaticBooleanMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticBooleanMethodV</td><td>jboolean CallStaticBooleanMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticBooleanMethodA</td><td>jboolean CallStaticBooleanMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticByteMethod</td><td>jbyte CallStaticByteMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticByteMethodV</td><td>jbyte CallStaticByteMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticByteMethodA</td><td>jbyte CallStaticByteMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticCharMethod</td><td>jchar CallStaticCharMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticCharMethodV</td><td>jchar CallStaticCharMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticCharMethodA</td><td>jchar CallStaticCharMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticShortMethod</td><td>jshort CallStaticShortMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticShortMethodV</td><td>jshort CallStaticShortMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticShortMethodA</td><td>jshort CallStaticShortMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticIntMethod</td><td>jint CallStaticIntMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticIntMethodV</td><td>jint CallStaticIntMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticIntMethodA</td><td>jint CallStaticIntMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticLongMethod</td><td>jlong CallStaticLongMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticLongMethodV</td><td>jlong CallStaticLongMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticLongMethodA</td><td>jlong CallStaticLongMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticFloatMethod</td><td>jfloat CallStaticFloatMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticFloatMethodV</td><td>jfloat CallStaticFloatMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticFloatMethodA</td><td>jfloat CallStaticFloatMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticDoubleMethod</td><td>jdouble CallStaticDoubleMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticDoubleMethodV</td><td>jdouble CallStaticDoubleMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticDoubleMethodA</td><td>jdouble CallStaticDoubleMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>
	<tr><td>CallStaticVoidMethod</td><td>void CallStaticVoidMethod(JNIEnv* env, jclass clazz, jmethodID methodID, ...)</td></tr>
	<tr><td>CallStaticVoidMethodV</td><td>void CallStaticVoidMethodV(JNIEnv* env, jclass clazz, jmethodID methodID, va_list args)</td></tr>
	<tr><td>CallStaticVoidMethodA</td><td>void CallStaticVoidMethodA(JNIEnv* env, jclass clazz, jmethodID methodID, const jvalue* args)</td></tr>

</table>

### 反射
<table>
	<tr><td>DefineClass</td><td>jclass DefineClass(JNIEnv* env, const char* name, jobject loader, const jbyte* buf, jsize len)</td></tr>
	<tr><td>FindClass</td><td>jclass FindClass(JNIEnv* env, const char* name)</td></tr>
	<tr><td>GetSuperclass</td><td>jclass GetSuperclass(JNIEnv* env, jclass sub)</td></tr>
	<tr><td>IsAssignableFrom</td><td>jboolean IsAssignableFrom(JNIEnv* env, jclass sub, jclass sup)</td></tr>
	<tr><td>GetObjectClass</td><td>jclass GetObjectClass(JNIEnv* env, jobject obj)</td></tr>
	<tr><td>IsInstanceOf</td><td>jboolean IsInstanceOf(JNIEnv* env, jobject obj, jclass clazz)</td></tr>
	<tr><td>FromReflectedMethod</td><td>jmethodID FromReflectedMethod(JNIEnv* env, jobject method)</td></tr>
	<tr><td>FromReflectedField</td><td>jfieldID FromReflectedField(JNIEnv* env, jobject field)</td></tr>
	<tr><td>ToReflectedMethod</td><td>jobject ToReflectedMethod(JNIEnv* env, jclass cls, jmethodID methodID, jboolean isStatic)</td></tr>
	<tr><td>ToReflectedField</td><td>jobject ToReflectedField(JNIEnv* env, jclass cls, jfieldID fieldID, jboolean isStatic)</td></tr>
</table>

### 数组
<table>
	<tr><td>GetArrayLength</td><td>jsize GetArrayLength(JNIEnv* env, jarray array)</td></tr>
	<tr><td>NewObjectArray</td><td>jobjectArray NewObjectArray(JNIEnv* env, jsize len, jclass clazz, jobject init)</td></tr>
	<tr><td>GetObjectArrayElement</td><td>jobject GetObjectArrayElement(JNIEnv* env, jobjectArray array, jsize index)</td></tr>
	<tr><td>SetObjectArrayElement</td><td>void SetObjectArrayElement(JNIEnv* env, jobjectArray array, jsize index, jobject val)</td></tr>
	<tr><td>NewBooleanArray</td><td>jbooleanArray NewBooleanArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>NewByteArray</td><td>jbyteArray NewByteArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>NewCharArray</td><td>jcharArray NewCharArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>NewShortArray</td><td>jshortArray NewShortArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>NewIntArray</td><td>jintArray NewIntArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>NewLongArray</td><td>jlongArray NewLongArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>NewFloatArray</td><td>jfloatArray NewFloatArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>NewDoubleArray</td><td>jdoubleArray NewDoubleArray(JNIEnv* env, jsize len)</td></tr>
	<tr><td>GetBooleanArrayElements</td><td>jboolean* GetBooleanArrayElements(JNIEnv* env, jbooleanArray array, jboolean* isCopy)</td></tr>
	<tr><td>GetByteArrayElements</td><td>jbyte* GetByteArrayElements(JNIEnv* env, jbyteArray array, jboolean* isCopy)</td></tr>
	<tr><td>GetCharArrayElements</td><td>jchar* GetCharArrayElements(JNIEnv* env, jcharArray array, jboolean* isCopy)</td></tr>
	<tr><td>GetShortArrayElements</td><td>jshort* GetShortArrayElements(JNIEnv* env, jshortArray array, jboolean* isCopy)</td></tr>
	<tr><td>GetIntArrayElements</td><td>jint* GetIntArrayElements(JNIEnv* env, jintArray array, jboolean* isCopy)</td></tr>
	<tr><td>GetLongArrayElements</td><td>jlong* GetLongArrayElements(JNIEnv* env, jlongArray array, jboolean* isCopy)</td></tr>
	<tr><td>GetFloatArrayElements</td><td>jfloat* GetFloatArrayElements(JNIEnv* env, jfloatArray array, jboolean* isCopy)</td></tr>
	<tr><td>GetDoubleArrayElements</td><td>jdouble* GetDoubleArrayElements(JNIEnv* env, jdoubleArray array, jboolean* isCopy)</td></tr>
	<tr><td>ReleaseBooleanArrayElements</td><td>void ReleaseBooleanArrayElements(JNIEnv* env, jbooleanArray array, jboolean* elems, jint mode)</td></tr>
	<tr><td>ReleaseByteArrayElements</td><td>void ReleaseByteArrayElements(JNIEnv* env, jbyteArray array, jbyte* elems, jint mode)</td></tr>
	<tr><td>ReleaseCharArrayElements</td><td>void ReleaseCharArrayElements(JNIEnv* env, jcharArray array, jchar* elems, jint mode)</td></tr>
	<tr><td>ReleaseShortArrayElements</td><td>void ReleaseShortArrayElements(JNIEnv* env, jshortArray array, jshort* elems, jint mode)</td></tr>
	<tr><td>ReleaseIntArrayElements</td><td>void ReleaseIntArrayElements(JNIEnv* env, jintArray array, jint* elems, jint mode)</td></tr>
	<tr><td>ReleaseLongArrayElements</td><td>void ReleaseLongArrayElements(JNIEnv* env, jlongArray array, jlong* elems, jint mode)</td></tr>
	<tr><td>ReleaseFloatArrayElements</td><td>void ReleaseFloatArrayElements(JNIEnv* env, jfloatArray array, jfloat* elems, jint mode)</td></tr>
	<tr><td>ReleaseDoubleArrayElements</td><td>void ReleaseDoubleArrayElements(JNIEnv* env, jdoubleArray array, jdouble* elems, jint mode)</td></tr>
	<tr><td>GetBooleanArrayRegion</td><td>void GetBooleanArrayRegion(JNIEnv* env, jbooleanArray array, jsize start, jsize l, jboolean* buf)</td></tr>
	<tr><td>GetByteArrayRegion</td><td>void GetByteArrayRegion(JNIEnv* env, jbyteArray array, jsize start, jsize l, jbyte* buf)</td></tr>
	<tr><td>GetCharArrayRegion</td><td>void GetCharArrayRegion(JNIEnv* env, jcharArray array, jsize start, jsize l, jchar* buf)</td></tr>
	<tr><td>GetShortArrayRegion</td><td>void GetShortArrayRegion(JNIEnv* env, jshortArray array, jsize start, jsize l, jshort* buf)</td></tr>
	<tr><td>GetIntArrayRegion</td><td>void GetIntArrayRegion(JNIEnv* env, jintArray array, jsize start, jsize l, jint* buf)</td></tr>
	<tr><td>GetLongArrayRegion</td><td>void GetLongArrayRegion(JNIEnv* env, jlongArray array, jsize start, jsize l, jlong* buf)</td></tr>
	<tr><td>GetFloatArrayRegion</td><td>void GetFloatArrayRegion(JNIEnv* env, jfloatArray array, jsize start, jsize l, jfloat* buf)</td></tr>
	<tr><td>GetDoubleArrayRegion</td><td>void GetDoubleArrayRegion(JNIEnv* env, jdoubleArray array, jsize start, jsize l, jdouble* buf)</td></tr>
	<tr><td>SetBooleanArrayRegion</td><td>void SetBooleanArrayRegion(JNIEnv* env, jbooleanArray array, jsize start, jsize l, const jboolean* buf)</td></tr>
	<tr><td>SetByteArrayRegion</td><td>void SetByteArrayRegion(JNIEnv* env, jbyteArray array, jsize start, jsize l, const jbyte* buf)</td></tr>
	<tr><td>SetCharArrayRegion</td><td>void SetCharArrayRegion(JNIEnv* env, jcharArray array, jsize start, jsize l, const jchar* buf)</td></tr>
	<tr><td>SetShortArrayRegion</td><td>void SetShortArrayRegion(JNIEnv* env, jshortArray array, jsize start, jsize l, const jshort* buf)</td></tr>
	<tr><td>SetIntArrayRegion</td><td>void SetIntArrayRegion(JNIEnv* env, jintArray array, jsize start, jsize l, const jint* buf)</td></tr>
	<tr><td>SetLongArrayRegion</td><td>void SetLongArrayRegion(JNIEnv* env, jlongArray array, jsize start, jsize l, const jlong* buf)</td></tr>
	<tr><td>SetFloatArrayRegion</td><td>void SetFloatArrayRegion(JNIEnv* env, jfloatArray array, jsize start, jsize l, const jfloat* buf)</td></tr>
	<tr><td>SetDoubleArrayRegion</td><td>void SetDoubleArrayRegion(JNIEnv* env, jdoubleArray array, jsize start, jsize l, const jdouble* buf)</td></tr>
	<tr><td>GetPrimitiveArrayCritical</td><td>void* GetPrimitiveArrayCritical(JNIEnv* env, jarray array, jboolean* isCopy)</td></tr>
	<tr><td>ReleasePrimitiveArrayCritical</td><td>void ReleasePrimitiveArrayCritical(JNIEnv* env, jarray array, void* carray, jint mode)</td></tr>
</table>

### 异常
<table>
	<tr><td>Throw</td><td>jint Throw(JNIEnv* env, jthrowable obj)</td></tr>
	<tr><td>ThrowNew</td><td>jint ThrowNew(JNIEnv* env, jclass clazz, const char* msg)</td></tr>
	<tr><td>ExceptionOccurred</td><td>jthrowable ExceptionOccurred(JNIEnv* env)</td></tr>
	<tr><td>ExceptionDescribe</td><td>void ExceptionDescribe(JNIEnv* env)</td></tr>
	<tr><td>ExceptionClear</td><td>void ExceptionClear(JNIEnv* env)</td></tr>
	<tr><td>ExceptionCheck</td><td>jboolean ExceptionCheck(JNIEnv* env)</td></tr>
	<tr><td>FatalError</td><td>void FatalError(JNIEnv* env, const char* msg)</td></tr>
</table>

### 字段
<table>
	<tr><td>GetFieldID</td><td>jfieldID GetFieldID(JNIEnv* env, jclass clazz, const char* name, const char* sig)</td></tr>
	<tr><td>GetObjectField</td><td>jobject GetObjectField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetBooleanField</td><td>jboolean GetBooleanField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetByteField</td><td>jbyte GetByteField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetCharField</td><td>jchar GetCharField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetShortField</td><td>jshort GetShortField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetIntField</td><td>jint GetIntField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetLongField</td><td>jlong GetLongField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetFloatField</td><td>jfloat GetFloatField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>GetDoubleField</td><td>jdouble GetDoubleField(JNIEnv* env, jobject obj, jfieldID fieldID)</td></tr>
	<tr><td>SetObjectField</td><td>void SetObjectField(JNIEnv* env, jobject obj, jfieldID fieldID, jobject val)</td></tr>
	<tr><td>SetBooleanField</td><td>void SetBooleanField(JNIEnv* env, jobject obj, jfieldID fieldID, jboolean val)</td></tr>
	<tr><td>SetByteField</td><td>void SetByteField(JNIEnv* env, jobject obj, jfieldID fieldID, jbyte val)</td></tr>
	<tr><td>SetCharField</td><td>void SetCharField(JNIEnv* env, jobject obj, jfieldID fieldID, jchar val)</td></tr>
	<tr><td>SetShortField</td><td>void SetShortField(JNIEnv* env, jobject obj, jfieldID fieldID, jshort val)</td></tr>
	<tr><td>SetIntField</td><td>void SetIntField(JNIEnv* env, jobject obj, jfieldID fieldID, jint val)</td></tr>
	<tr><td>SetLongField</td><td>void SetLongField(JNIEnv* env, jobject obj, jfieldID fieldID, jlong val)</td></tr>
	<tr><td>SetDoubleField</td><td>void SetDoubleField(JNIEnv* env, jobject obj, jfieldID fieldID, jdouble val)</td></tr>
	<tr><td>GetStaticFieldID</td><td>jfieldID GetStaticFieldID(JNIEnv* env, jclass clazz, const char* name, const char* sig)</td></tr>
	<tr><td>GetStaticObjectField</td><td>jobject GetStaticObjectField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticBooleanField</td><td>jboolean GetStaticBooleanField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticByteField</td><td>jbyte GetStaticByteField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticCharField</td><td>jchar GetStaticCharField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticShortField</td><td>jshort GetStaticShortField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticIntField</td><td>jint GetStaticIntField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticLongField</td><td>jlong GetStaticLongField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticFloatField</td><td>jfloat GetStaticFloatField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>
	<tr><td>GetStaticDoubleField</td><td>jdouble GetStaticDoubleField(JNIEnv* env, jclass clazz, jfieldID fieldID)</td></tr>			
	<tr><td>SetStaticObjectField</td><td>void SetStaticObjectField(JNIEnv* env, jclass clazz, jfieldID fieldID, jobject val)</td></tr>
	<tr><td>SetStaticBooleanField</td><td>void SetStaticBooleanField(JNIEnv* env, jclass clazz, jfieldID fieldID, jboolean val)</td></tr>
	<tr><td>SetStaticByteField</td><td>void SetStaticByteField(JNIEnv* env, jclass clazz, jfieldID fieldID, jbyte val)</td></tr>
	<tr><td>SetStaticCharField</td><td>void SetStaticCharField(JNIEnv* env, jclass clazz, jfieldID fieldID, jchar val)</td></tr>
	<tr><td>SetStaticShortField</td><td>void SetStaticShortField(JNIEnv* env, jclass clazz, jfieldID fieldID, jshort val)</td></tr>
	<tr><td>SetStaticIntField</td><td>void SetStaticIntField(JNIEnv* env, jclass clazz, jfieldID fieldID, jint val)</td></tr>
	<tr><td>SetStaticLongField</td><td>void SetStaticLongField(JNIEnv* env, jclass clazz, jfieldID fieldID, jlong val)</td></tr>
	<tr><td>SetStaticFloatField</td><td>void SetStaticFloatField(JNIEnv* env, jclass clazz, jfieldID fieldID, jfloat val)</td></tr>
	<tr><td>SetStaticDoubleField</td><td>void SetStaticDoubleField(JNIEnv* env, jclass clazz, jfieldID fieldID, jdouble val)</td></tr>
</table>

### 字符串
<table>
	<tr><td>NewString</td><td>jstring NewString(JNIEnv* env, const jchar* unicode, jsize len)</td></tr>
	<tr><td>GetStringLength</td><td>jsize GetStringLength(JNIEnv* env, jstring str)</td></tr>
	<tr><td>GetStringChars</td><td>const jchar* GetStringChars(JNIEnv* env, jstring str, jboolean* isCopy)</td></tr>
	<tr><td>ReleaseStringChars</td><td>void ReleaseStringChars(JNIEnv* env, jstring str, const jchar* chars)</td></tr>
	<tr><td>NewStringUTF</td><td>jstring NewStringUTF(JNIEnv* env, const char* utf)</td></tr>
	<tr><td>GetStringUTFLength</td><td>jsize GetStringUTFLength(JNIEnv* env, jstring str)</td></tr>
	<tr><td>GetStringUTFChars</td><td>const char* GetStringUTFChars(JNIEnv* env, jstring str, jboolean* isCopy)</td></tr>
	<tr><td>ReleaseStringUTFChars</td><td>void ReleaseStringUTFChars(JNIEnv* env, jstring str, const char* chars)</td></tr>
	<tr><td>GetStringRegion</td><td>void GetStringRegion(JNIEnv* env, jstring str, jsize start, jsize len, jchar* buf)</td></tr>
	<tr><td>GetStringUTFRegion</td><td>void GetStringUTFRegion(JNIEnv* env, jstring str, jsize start, jsize len, char* buf)</td></tr>
	<tr><td>GetStringCritical</td><td>const jchar* GetStringCritical(JNIEnv* env, jstring string, jboolean* isCopy)</td></tr>
	<tr><td>ReleaseStringCritical</td><td>void ReleaseStringCritical(JNIEnv* env, jstring string, const jchar* cstring)</td></tr>
</table>

### 底层
<table>
	<tr><td>PushLocalFrame</td><td>jint PushLocalFrame(JNIEnv* env, jint capacity)</td></tr>
	<tr><td>PopLocalFrame</td><td>jobject PopLocalFrame(JNIEnv* env, jobject result)</td></tr>
	<tr><td>EnsureLocalCapacity</td><td>jint EnsureLocalCapacity(JNIEnv* env, jint capacity)</td></tr>
	<tr><td>NewGlobalRef</td><td>jobject NewGlobalRef(JNIEnv* env, jobject lobj)</td></tr>
	<tr><td>NewLocalRef</td><td>jobject NewLocalRef(JNIEnv* env, jobject ref)</td></tr>
	<tr><td>DeleteGlobalRef</td><td>void DeleteGlobalRef(JNIEnv* env, jobject gref)</td></tr>	
	<tr><td>DeleteLocalRef</td><td>void DeleteLocalRef(JNIEnv* env, jobject obj)</td></tr>
	<tr><td>NewWeakGlobalRef</td><td>jweak NewWeakGlobalRef(JNIEnv* env, jobject obj)</td></tr>
	<tr><td>DeleteWeakGlobalRef</td><td>void DeleteWeakGlobalRef(JNIEnv* env, jweak ref)</td></tr>
	<tr><td>GetObjectRefType</td><td>jlong GetObjectRefType(JNIEnv* env, jobject obj)</td>
	<tr><td>IsSameObject</td><td>jboolean IsSameObject(JNIEnv* env, jobject obj1, jobject obj2)</td></tr>
	<tr><td>RegisterNatives</td><td>jint RegisterNatives(JNIEnv* env, jclass clazz, const JNINativeMethod* methods, jint nMethods)</td></tr>
	<tr><td>UnregisterNatives</td><td>jint UnregisterNatives(JNIEnv* env, jclass clazz)</td></tr>
	<tr><td>MonitorEnter</td><td>jint MonitorEnter(JNIEnv* env, jobject obj)</td></tr>
	<tr><td>MonitorExit</td><td>jint MonitorExit(JNIEnv* env, jobject obj)</td></tr>
	<tr><td>NewDirectByteBuffer</td><td>jobject NewDirectByteBuffer(JNIEnv* env, void* address, jlong capacity)</td></tr>
	<tr><td>GetDirectBufferAddress</td><td>void* GetDirectBufferAddress(JNIEnv* env, jobject buf)</td></tr>
	<tr><td>GetDirectBufferCapacity</td><td>jlong GetDirectBufferCapacity(JNIEnv* env, jobject buf)</td></tr>
</table>

### 虚拟机
<table>
	<tr><td>GetJavaVM</td><td>jint GetJavaVM(JNIEnv* env, JavaVM** vm)</td></tr>
	<tr><td>JNI_CreateJavaVM</td><td>jint JNI_CreateJavaVM(JavaVM** pvm, void** penv, void* args)</td></tr>
	<tr><td>JNI_GetCreatedJavaVMs</td><td>jint JNI_GetCreatedJavaVMs(JavaVM** pvm, jsize, jsize*)</td></tr>
	<tr><td>JNI_GetDefaultJavaVMInitArgs</td><td>jint JNI_GetDefaultJavaVMInitArgs(void* args)</td></tr>
	<tr><td>JNI_OnLoad</td><td>jint JNI_OnLoad(JavaVM** pvm, void* reserved)</td></tr>
	<tr><td>JNI_OnUnload</td><td>jint JNI_OnUnload(JavaVM** pvm, void* reserved)</td></tr>
	<tr><td>GetVersion</td><td>jint GetVersion(JNIEnv* env)</td></tr>
</table>