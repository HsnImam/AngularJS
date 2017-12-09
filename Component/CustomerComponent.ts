import {Customer} from "../Model/Customer"
import { Component }      from '@angular/core';

@Component({
    selector : "myui",
    templateUrl: "../UI/Customer.html"
})
export class CustomerComponent{
  CustomerObj:Customer = new Customer();
}
