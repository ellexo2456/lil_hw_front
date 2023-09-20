
# Почему так?

![Pasted Graphic.png](..%2F..%2F..%2F..%2FLibrary%2FGroup%20Containers%2Fgroup.com.apple.notes%2FAccounts%2FEFF2E33F-4848-4E90-90E4-62E777F67B97%2FMedia%2F4885395F-DD63-4C06-9BC5-6DA6F357118B%2FPasted%20Graphic.png)

В браузере this это window который является глобальным объектом. В node же, в глобальной области this - это modules.exports.  
При использовании node в режиме REPL (в режиме интерпретатора) код исполнется в глобальном контексте и как только код вводится в repl this устанавливается в global, т.е. глобальный объект.