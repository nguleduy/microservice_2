import {Injectable} from '@angular/core';
import {GeoJson} from '../model/Map';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../environments/environment';
// @ts-ignore
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }


  getMarkers(): FirebaseListObservable<any> {
    return this.db.list('/markers');
  }

  createMarker(data: GeoJson): any {
    return this.db.list('/markers')
      .push(data);
  }

  removeMarker($key: string): any {
    return this.db.object('/markers/' + $key).remove();
  }

}
