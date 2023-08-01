interface Keyboard {}

class LGKeyboard implements Keyboard {
    constructor() {
        console.log('LG 키보드 생성');
    }
}

class SamsungKeyboard implements Keyboard {
    constructor() {
        console.log('Samsung 키보드 생성');
    }
}

interface Mouse {}

class LGMouse implements Mouse {
    constructor() {
        console.log('LG 마우스 생성');
    }
}

class SamsungMouse implements Mouse {
    constructor() {
        console.log('Samsung 마우스 생성');
    }
}

type ComputerBrandType = "LG" | "Samsung"

class KeyboardFactory {
    private keyboard! : Keyboard;
    public create(type : ComputerBrandType) : Keyboard {
        switch (type) {
            case "LG":
                this.keyboard = new LGKeyboard();
                break;
            case "Samsung":
                this.keyboard = new SamsungKeyboard();
                break;
            default:
                this.keyboard = new LGKeyboard();
                break
        }
        return this.keyboard;
    }
}

class MouseFactory {
    private mouse! : Mouse;
    public create(type : ComputerBrandType) : Mouse {
        switch (type) {
            case "LG":
                this.mouse = new LGMouse();
                break;
            case "Samsung":
                this.mouse = new SamsungMouse();
                break;
            default:
                this.mouse = new LGMouse()
                break
        }
        return this.mouse;
    }
}

class ComputerFactory {
    public createComputer(type : ComputerBrandType) {
        const keyboardFactory = new KeyboardFactory();
        const mouseFactory = new MouseFactory();

        keyboardFactory.create(type);
        mouseFactory.create(type);
        console.log(`${type} computer 생성!`);
    }
}

class Client {
    public static main() {
        const computerFactory = new ComputerFactory();
        computerFactory.createComputer("LG");
    }
}

Client.main();