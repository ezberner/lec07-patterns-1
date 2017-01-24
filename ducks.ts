
/**
 * A class that represents a Duck.
 * Indented to be extended to specific species.
 */
export abstract class Duck {

  /**
   * Has the duck make a sound
   */
  quack() {
    console.log("quack!");
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
}