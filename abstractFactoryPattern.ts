namespace AbstractFactoryPattern {
    interface Keyboard {
    }

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

    interface Mouse {
    }

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

    interface ComputerFactory {
        createKeyboard(): Keyboard;

        createMouse(): Mouse;
    }

    class LGComputerFactory implements ComputerFactory {
        public createKeyboard(): LGKeyboard {
            return new LGKeyboard();
        }

        public createMouse(): LGMouse {
            return new LGMouse();
        }
    }

    class SamsungComputerFactory implements ComputerFactory {
        public createKeyboard(): SamsungKeyboard {
            return new SamsungKeyboard();
        }

        public createMouse(): SamsungMouse {
            return new SamsungMouse();
        }
    }

    class FactoryOfComputerFactory {
        private computerFactory!: ComputerFactory;

        public createComputer(type: String) {
            switch (type) {
                case "LG" :
                    this.computerFactory = new LGComputerFactory();
                    break;

                case "Samsung" :
                    this.computerFactory = new SamsungComputerFactory()
            }
            this.computerFactory.createKeyboard();
            this.computerFactory.createMouse();
            console.log(`${type} computer 생성!`)
        }
    }

    class Client {
        public static main() {
            const factoryOfComputerFactory = new FactoryOfComputerFactory();
            factoryOfComputerFactory.createComputer("LG");
        }
    }

    Client.main();
}