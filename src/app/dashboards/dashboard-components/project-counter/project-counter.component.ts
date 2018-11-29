import { Component ,Input} from '@angular/core';
@Component({
    selector: 'project-counter',
	templateUrl: './project-counter.component.html'
})
export class ProjectCounterComponent { 
		 
	constructor() {
		
	}

	@Input() CompanyCountList: number;
}