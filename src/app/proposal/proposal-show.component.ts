/**
 * Created by oscar on 1/06/17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Proposal} from './proposal';
import {ProposalService} from './proposal.service';

@Component({
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ProposalService]
})
export class ProposalShowComponent implements OnInit {

  @Input()
  proposal: Proposal;

  constructor(private route: ActivatedRoute,
              private http: Http,
              private proposalService: ProposalService) {
  };

  ngOnInit(): void {
    let proposalRequest = this.route.params
      .flatMap((params: Params) =>
        this.proposalService.getProposal(+params['id'])
      );

    proposalRequest.subscribe(response => this.proposal = response.json());
  };

}
