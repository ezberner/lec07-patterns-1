class FlyBehavior {
  fly():void{}
}

class CanFlyBehavior implements FlyBehavior{
  fly():void {
    console.log("Flies away!");
  }
}

class NoFlyBehavior implements FlyBehavior {
  fly():void{}
}

let behavior:FlyBehavior = new NoFlyBehavior();
behavior.fly();

//Typescript example (encapsulating functions inside of class/object) -- see slides
interface FlyFunction{
  ():void;
}
// Typescript example (encapsulating functions inside of class/object) -- see slides
// COMPOSITION OVER INHERITANCE(?)
let canFlyFunction: FlyFunction = function(){
  console.log("Flying!");
}

/**
 * A class that represents a Duck.
 * Indented to be extended to specific species.
 */
export abstract class Duck {

  protected flyBehavior:FlyBehavior = new CanFlyBehavior();

  /**
   * Has the duck make a sound
   */
  quack() {
    console.log("quack!");
  }
  
  /**
   * Has the duck fly
   */
  Fly() {
    console.log("fly");
  }

  /**
   * Has the duck swim.
   * @param distance how far to swim
   */
  swim(distance:number) {
    console.log("Swims the "+distance+"m duckstyle.")
  }


  /**
   * Gets the duck's description
   * @returns A description of the duck
   */
  abstract display():string;

  fly() {
    this.flyBehavior.fly();
  }
}



export class RedheadDuck extends Duck {
  display() {
    return "Looks like a RedHead";
  }
}


export class MallardDuck extends Duck {
  display() {
    return "Looks like a Mallard";
  } 
}


export class TealDuck extends Duck {
  display() {
    return "Looks like a Teal";
  }
}


export class RubberDuck extends Duck {
  quack() {
    console.log('squeek!')
  }

  display() {
    return "A rubber ducky!"
  }  

  // doesn't fly
  fly() {}
}

export class DecoyDuck extends Duck {
  quack(){}
  display(){
    return "A decoy duck. Looks like a duck, but isn't and doesn't do shit"
  }
  fly(){}
}