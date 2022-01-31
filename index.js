class BankAccount {

    constructor() {
        return new Error('This method has not yet been implemented')
    }

    open() {
        return new Error('This method has not yet been implemented')
    }

    close() {
        return new Error('This method has not yet been implemented')
    }

    deposit(money) {
        return new Error('This method has not yet been implemented')
    }

    withdraw(money) {
        return new Error('This method has not yet been implemented')
    }

    get balance() {
        return new Error('This method has not yet been implemented')
    }
}

class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

module.exports = {
    BankAccount,
    ValueError
}