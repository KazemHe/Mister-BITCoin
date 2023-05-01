import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { storageService } from './storage.service';
import { Contact } from '../models/contact.model';


export interface User {
  name: string;
  coins: number;
  moves: any[]; // you may want to define a type for the `moves` array
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User | undefined {
    const user = storageService.load('user');
    if (user) {
      user.moves = Array.isArray(user.moves) ? user.moves : [];
      return user as User;
    } else {
      return undefined;
    }
  }


  signUp(userCred: { name: string }): Observable<User | any> {
    const newUser: User = { name: userCred.name, coins: 100, moves: [] };
    const user = storageService.store('user', newUser);
    return of(user as any);
  }


  addMove(contact: string, amount: number): Observable<User | boolean> {
    return new Observable(observer => {
      const user = this.getUser();
      if (user && user.coins >= amount) {
        const newMove = { to: contact, amount, at: Date.now() };
        const updatedUser: User = {
          ...user,
          coins: user.coins - amount,
          moves: [...user.moves, newMove]
        };
        storageService.store('user', updatedUser);
        observer.next(updatedUser);
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }


  getUserMoves(contact?: Contact) {
    const user = this.getUser();
    if (user) {
      if (contact) {
        return user.moves.filter(move => move.to.name === contact.name);
      } else {
        return user.moves.slice(-3).reverse();
      }
    } else {
      return [];
    }
  }
  



}
