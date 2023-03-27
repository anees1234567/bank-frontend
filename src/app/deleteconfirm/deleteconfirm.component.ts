import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {

@Output()  oncancel=new EventEmitter
@Output()  ondelete=new EventEmitter


cancel(){
  // to occur as userdefined event
  this.oncancel.emit()
}

delete(){
   // to occur as userdefined event
   this.ondelete.emit()
}

}
