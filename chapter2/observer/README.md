# 观察者模式     
* 观察者模式是设计模式中非常常见的一种，它定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，所有的依赖者都会收到通知并实现自动更新
* 为实现观察者模式，我们需要在 Subject 上提供注册和取消 Observer 的方法，并维持一个 Observer 数组来维持。此外，还需要一个 notifyObserers 来通知其变化。
* 在 Observer 上，我们应当提供一个 update 方法，用于供 Subject 更新数据。