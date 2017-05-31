/**
 * Created by oscar on 31/05/17.
 */
import {Component} from '@angular/core';
import {Proposal} from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'https://portfolio.jordanhudgens.com',
    'Ruby on Rails', 150, 120, 15, 'oscar.pay4@gmail.com');
  proposalTwo: Proposal = new Proposal(99, 'Xyz Company', 'https://portfolio.jordanhudgens.com',
    'Ruby on Rails', 150, 120, 15, 'oscar.pay4@gmail.com');
  proposalThree: Proposal = new Proposal(300, 'Something Company', 'https://portfolio.jordanhudgens.com',
    'Ruby on Rails', 150, 120, 15, 'oscar.pay4@gmail.com');

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];
}