# IO多路复用

## select、poll、epoll

<table>
    <thead>
        <tr>
            <th></th>
            <th>select</th>
            <th>poll</th>
            <th>epoll</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>数据结构</th>
            <td>数组（fd_set）</td>
            <td>链表（pollfd）</td>
            <td>红黑树</td>
        </tr>
        <tr>
            <th>拷贝</th>
            <td>每次调用都需要把fd_set从用户态拷贝到内核态</td>
            <td>每次调用都需要把pollfd从用户态拷贝到内核态</td>
            <td>只拷贝一次（epoll_ctl），之后调用epoll_wait不需要拷贝（mmap）</td>
        </tr>
        <tr>
            <th>遍历</th>
            <td>每次调用需要遍历fd_set</td>
            <td>每次调用需要遍历pollfd</td>
            <td>无须遍历全部文件描述符，每当fd就绪，系统注册的回调函数就会被调用，将就绪fd放到readyList里面</td>
        </tr>
        <tr>
            <th>数量限制</th>
            <td>存在限制，一般为1024/2048（x86/x64，内核宏）</td>
            <td>无</td>
            <td>无</td>
        </tr>
        <tr>
            <th>触发方式</th>
            <td>水平触发</td>
            <td>水平触发</td>
            <td>水平触发<br/>边缘触发</td>
        </tr>
        <tr>
            <th>可移植性</th>
            <td>好</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>超时精度</th>
            <td>高</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

##### 水平触发和边缘触发

- 水平触发（LT）：如果文件描述符已经就绪，此时会触发通知。如果没有处理，在下次可以重复检测到就绪状态。
- 边缘触发（ET）：只通知文件描述符变为就绪状态。如果没有处理，不会再次通知，直到下一次IO就绪时才会通知。上层应尽量一次性将数据处理完。