import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EngineService {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() {

  }

  sayHello() {
    console.log('hellooooooooooooooo');
  }
}
