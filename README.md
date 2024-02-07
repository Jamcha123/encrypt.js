encryption-file is a js file encryption package
encryption-file inputs a file and outputs a file called encrypted.txt

How it works?
First install it 
```
    npm i encryption-file
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

Any other arguments will just return buffer.
There is no decryption since you can't decrypted Hashes
