import { AbstractControl, FormGroup } from "@angular/forms";
import { ReactiveFormComponent } from "./reactive-form.component"

export class passwordValidator{
    // static noSpaces(control: AbstractControl){
    //     if(control.value.indexOf(' ') > 0){
    //         return {noSpaces: true};
    //     } else{
    //         return null;
    //     }
    // }

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
    