import { inject } from "@angular/core";
import { UserService } from "../services/user.service ";
import { Router } from "@angular/router";
import { lastValueFrom } from "rxjs";

export  function  authGuard () {

    const user = inject(UserService).getUser()
    console.log('user guard', user)
    if (user) return true
    else {
        inject(Router).navigateByUrl('/signup')
        return false
    }
}