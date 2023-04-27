import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  supabase: SupabaseClient = createClient(environment.API, environment.APIKEY);

  constructor() {}
}
