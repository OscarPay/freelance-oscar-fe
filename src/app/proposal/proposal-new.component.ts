/**
 * Created by oscar on 31/05/17.
 */
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {ProposalService} from './proposal.service';
import {Proposal} from './proposal';

@Component({
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
  providers: [ProposalService]
})
export class ProposalNewComponent {
  proposal = new Proposal();
  submitted = false;

  constructor(private proposalService: ProposalService) {
  }

  createProposal(proposal) {
    this.submitted = true;
    this.proposalService.createProposal(proposal)
      .subscribe(
        data => {
          return true;
        },
        error => {
          console.log('Error saving proposal');
          return Observable.throw(error);
        }
      );
  }
}
