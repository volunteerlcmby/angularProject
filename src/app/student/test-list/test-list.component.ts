import { Component, OnInit ,Input} from '@angular/core';
import { Test } from '../../models/test.models';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
@Input()
tests!:Test[];
  constructor() { }

  ngOnInit(): void {
  }

}
