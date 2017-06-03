/**
 * Created by oscar on 31/05/17.
 */
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Document} from './document';
import {DocumentService} from './documents.service';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['document.component.css'],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit {
  pageTitle = 'Document Dashboard';
  documents: Document[];
  errorMessage: string;

  constructor(private documentService: DocumentService) {
  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
      .subscribe(
        documents => this.documents = documents,
        error => this.errorMessage = <any>error
      );
  }
}
