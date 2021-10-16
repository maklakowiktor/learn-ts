class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is $this.version}`;
    }
}
//
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}
// ================

class Animal {
    protected voice: string = ''; // protected: Access in current class and child classes only
    public color: string = 'black';

    constructor() {
        this.go();
    }

    // Private: Only access in current scope
    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }

    public meow(): void {
        console.log(this.voice);
    }
}

const cat = new Cat();
cat.setVoice('meow');
console.log(cat.color);
cat.meow();
// cat.voice

// ================
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }

    info(): string {
        return 'This is info';
    }
}