#  单例模式
* 单例模式用于全局只需要一个实例的时候。之所以不用全局变量，一方面是避免变量污染，另一方面是为了延迟初始化。避免过早地创建了消耗性能的变量
* 其核心做法在于将构造函数变为 private，只提供一个方法用于初始化。要注意的是，在多进程中，初始化方法在第一次执行时候要注意同步问题。