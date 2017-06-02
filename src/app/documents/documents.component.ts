/**
 * Created by oscar on 31/05/17.
 */
import {Component} from '@angular/core';
import {Document} from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['document.component.css']
})
export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard';

  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'asdasd asdasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1280px-Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: 'My Second Doc',
      description: 'asdasd asdasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1280px-Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: 'My Last Doc',
      description: 'asdasd asdasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1280px-Mistakes-to-avoid-when-hiring-freelancers.jpg'
    }
  ];
}
