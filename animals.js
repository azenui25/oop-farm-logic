class Animal {
    constructor(age) {
        this.age = age
    }
    getYieldInEuros() {
        return this.price * this.getWeightInKg()
    }
}

class Pig extends Animal {
    constructor(age) {
        super(age)
        this.price = 4
    }

    getWeightInKg() {
        return Math.min(700, this.age * 2.3)
    }

}

class Horse extends Animal {
    constructor(age) {
        super(age)
        this.price = 10
    }

    getWeightInKg() {
        return Math.min(1000, this.age * 1.7)
    }
}

class Cow extends Animal {
    constructor(age) {
        super(age)
        this.price = 5
    }

    getWeightInKg() {
        return Math.min(1200, this.age * 1.5)
    }
}

module.exports = { Pig, Horse, Cow }