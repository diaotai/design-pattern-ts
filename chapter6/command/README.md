# 命令模式
* 命令模式用于将具体的操作封装为一个 command 的 excute。然后调用者不必关心执行的细节，甚至不需要关心执行者是谁，只需要调用就好。
* 发起调用的对象被称为 client（遥控器），而命令本身就是 invoker（负责封装具体的操作，提供一个统一的接口）。而具体的操作则是由 reciver 负责
* 命令模式可以用在队列和日志系统上
* 当需要将发出请求的对象和执行的请求的对象解耦时，就可以使用命令模式
* 命令模式有一个很不好的地方在于——每个操作都对应一个一个命令类，这样的话可能会创建 N 多个类。