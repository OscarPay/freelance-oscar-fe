/**
 * Created by oscar on 31/05/17.
 */
export class Proposal {
  constructor(public id?: number,
              public customer?: string,
              public portfolio_url: string = 'http://',
              public tools?: string,
              public estimated_hours?: number,
              public hourly_rate?: number,
              public weeks_to_complete?: number,
              public client_email?: string) {
  }
}

// 15, 'Abc Company', 'https://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'oscar.pay4@gmail.com'
