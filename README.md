encrypt.js is a js file encryption package
encrypt.js inputs a file and outputs a file called encrypted.txt

How it works?
First install it 
```
    npm i encrypt.js
```
Second call it like you should call you mother, she misses you
```
    import {getFile} from './encrypt.js'
    getFile(<filename and a extension>, <encryption_type>)
```
encryption types are:
1. hex
2. binary
3. base64
4. base64url

any other arguments will just return buffer.

