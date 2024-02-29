import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/Notif_service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  offers: any[] = [];
  rdvs: any[] = [];
  userId!: string;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getOffers().subscribe((response: any) => {
      this.offers = response as any[]; // Utilisez l'opérateur de cast ici
    });

    const userId = localStorage.getItem('userId'); // userId sera de type string | null
    if (userId !== null) {
      // Vérifiez si userId n'est pas null
      this.notificationService.getRdvs(userId).subscribe((response: any) => {
        // Convertir la réponse en tableau
        const allRdvs = response as any[];
        // Obtenir la date d'aujourd'hui
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Ignorer l'heure, ne comparer que la date
        // Filtrer les rendez-vous dont la date est supérieure ou égale à aujourd'hui
        this.rdvs = allRdvs.filter((rdv) => new Date(rdv.date) >= today);
        console.log('Details', this.rdvs);
      });
    } else {
      console.error('userId est null'); // Gérez le cas où userId est null
    }
  }
}
