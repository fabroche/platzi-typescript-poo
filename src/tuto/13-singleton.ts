export class MyService {
  // bandera
  static instance: MyService | null = null;

  // constructor privado
  private constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  // metodo para crear la instancia de MyService
  // en caso de que no exista, sino devuelve la existente
  static create(name: string) {
    if (MyService.instance === null) {
      console.log('deberia entrar una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');
console.log('myService1 :>> ', myService1.name);
const myService2 = MyService.create('service 2');
console.log('myService2 :>> ', myService2.name);
const myService3 = MyService.create('service 3');
console.log('myService3 :>> ', myService3.name);

console.log(myService1 === myService2);
