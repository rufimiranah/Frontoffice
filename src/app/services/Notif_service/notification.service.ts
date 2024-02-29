import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}
  getOffers() {
    return this.http.get(
      'https://m1p10mean-saotra-rufinah-backoffice.vercel.app/notif/offres'
    );
  }

  getRdvs(userId: string) {
    return this.http.get(
      'https://m1p10mean-saotra-rufinah-backoffice.vercel.app/notif/rdvs/' +
        userId
    );
  }
}
