hash-password-default
=====================

Just some code I use in my node projects to hash and check passwords


## How to use
    > var hash = require('./hash-password-default')
    undefined
    > var lolcat = hash.hashPassword('lolcat')
    undefined
    > hash.checkPassword(lolcat, 'lolcat')
    true
