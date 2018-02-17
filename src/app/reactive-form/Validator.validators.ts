import { AbstractControl, FormGroup } from "@angular/forms";
import { ReactiveFormComponent } from "./reactive-form.component"

export class Validator{
    static patternChecker(control: AbstractControl){
        if(control.value.match(/[a-z]+/g) == true && control.value.match(/[A-Z]+/g) == true && control.value.match(/[A-Z]+/g) == true){
            return {patternChecker: true};
        } else{
            return null;
        }
    }

    static valueCheck(group: FormGroup){
        let field= group.get("newPassword").value;
        let field2 = group.get("confirmPassword").value;
        if (field == '' || field2 == ''){return null;}
        else{
            if(field != field2) {
                console.log('Passwords dont match');
                group.get('confirmPassword').setErrors( {valueCheck: true} )
            } else {
                console.log('Passwords match');
                return null
        }}
    }};
    