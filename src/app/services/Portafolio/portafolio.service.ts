import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Portafolio } from 'src/app/core/models/portafolio.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortafolioService {
  supabase: SupabaseClient = createClient(environment.API, environment.APIKEY);

  constructor() {}

  async getportafolios() {
    let { data: portafolios, error } = await this.supabase
      .from<Portafolio>('portafolio')
      .select('*')
      .limit(10);
    return { portafolios, error };
  }
}
