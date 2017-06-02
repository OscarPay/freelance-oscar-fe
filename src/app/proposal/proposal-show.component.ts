/**
 * Created by oscar on 1/06/17.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Proposal} from './proposal';

@Component({
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
})
export class ProposalShowComponent implements OnInit {
  id: number;
  routedId: any;

  constructor(
    private route: ActivatedRoute
  ) {};

  ngOnInit(): void {
    this.routedId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
  };

}
