
export class Element {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}
export class List {
    constructor(array) {
        this.length = 0
        this.head = null
        if (array && Array.isArray(array)) {
            array.forEach(num => {
                this.add(new Element(num))
            })
        }
    }
    add(el) {
        let newNext = this.head
        this.head = el
        this.head.next = newNext
        this.length++
    }
    toArray() {
        let myArray = []
        const downUntilNull = (element, array) => {
            if (element.next === null) {
                array.push(element.value)
                return array
            } else {
                array.push(element.value)
                return downUntilNull(element.next, array)
            }
        }
        return downUntilNull(this.head, myArray)
    }
    reverse() {
        let reversedList = new List
        const downUntilNull = (element) => {
            if (element.next === null) {
                reversedList.add(new Element(element.value))
                return
            } else {
                reversedList.add(new Element(element.value))
                return downUntilNull(element.next)
            }
        }
        downUntilNull(this.head)
        return reversedList
    }
}
