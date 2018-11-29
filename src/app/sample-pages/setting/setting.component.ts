import { Component} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	templateUrl: 'setting.component.html' ,
	styleUrls: ['./setting.component.css']
})
export class SettingComponent {
	closeResult: string;
	constructor(private modalService: NgbModal, private modalService2: NgbModal) {}
	open2(content) { 
		this.modalService.open(content).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	  }
	  open(content) {
		this.modalService2.open(content, { windowClass: 'dark-modal' });
	  }

	  private getDismissReason(reason: any): string {
			if (reason === ModalDismissReasons.ESC) {
				return 'by pressing ESC';
			} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
				return 'by clicking on a backdrop';
			} else {
				return  `with: ${reason}`;
			}
		}
		


		
}